import { supabase } from '@/integrations/supabase/client';

export const SEFAZ_STORAGE_KEY = 'sefaz_ba_daily_plan_completed_tasks_v2';
export const UFBA_STORAGE_KEY = 'ufba_cgu_sprint_plan_completed_tasks_v2';
export const QUESTIONS_DONE_STORAGE_KEY = 'study_completed_questions_keys_v2';
export const UFBA_CUSTOM_DATES_KEY = 'ufba_edital_custom_dates_v1';

export interface StudyPlanCloudPayload {
  ufbaTaskIds: Record<string, boolean>;
  sefazTaskIds: Record<string, boolean>;
  questionsDoneKeys: Record<string, boolean>;
  customDates: Record<string, string>;
  updatedAt?: string;
}

export function normalizeSubject(str?: string): string {
  return (str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function getCanonicalSubject(name?: string): string {
  const n = normalizeSubject(name);
  if (n.includes('casp') || n.includes('setor publico') || n.includes('contabilidade publica')) return 'casp';
  if (n.includes('contabilid')) return 'contabilidade geral';
  if (n.includes('portug') || n.includes('lingua')) return 'lingua portuguesa';
  if (n.includes('constitucional')) return 'direito constitucional';
  if (n.includes('administrativo') || n.includes('licitacoes')) return 'direito administrativo';
  if (n.includes('tribut')) return 'direito tributario';
  if (n.includes('auditoria') || n.includes('pericia')) return 'auditoria';
  if (n.includes('estat')) return 'estatistica';
  // Check AFO / Finanças / Administração BEFORE Economia because "Administração, Economia e Finanças Públicas" contains "economia"
  if (n.includes('financas') || n.includes('afo') || n.includes('orcamento') || n.includes('administracao')) return 'afo';
  if (n.includes('economia')) return 'economia';
  if (n.includes('racial') || n.includes('igualdade')) return 'igualdade racial';
  if (n.includes('matem')) return 'matematica financeira';
  if (n.includes('inform') || n.includes('tecnologia')) return 'informatica';
  return n;
}

export function getCanonicalLessonNum(lessonStr?: string): number | null {
  if (!lessonStr) return null;
  const norm = normalizeSubject(lessonStr);
  // Prevent "Módulo Especialista UFBA 1" / "2" from colliding with Aula 01 / Aula 02
  if (norm.includes('especialista')) return null;
  const match = lessonStr.match(/\d+/);
  return match ? parseInt(match[0], 10) : null;
}

export function getSpecialistAulaNum(specialistTopicId?: string, lessonStr?: string): number | null {
  if (specialistTopicId === 'pericia-contabil') return 17;
  if (specialistTopicId === 'casp-municipal-siconfi') return 19;
  if (specialistTopicId === 'contabilidade-custos-siafi') return 31;
  if (specialistTopicId === 'redacao-oficial-variacao') return 16;
  if (specialistTopicId === 'legislacao-ufba-ifes') return 25;
  if (specialistTopicId === 'governo-digital-governanca') return 26;
  if (specialistTopicId === 'etica-lai-lgpd') return 27;
  if (specialistTopicId === 'assistente-tga-estruturas-podc') return 28;
  if (specialistTopicId === 'assistente-processos-qualidade') return 29;
  if (specialistTopicId === 'assistente-gestao-pessoas-comportamento') return 30;
  if (specialistTopicId === 'assistente-recursos-materiais-estoques') return 31;
  if (specialistTopicId === 'assistente-arquivologia-completa') return 32;
  if (specialistTopicId === 'assistente-atendimento-publico') return 33;
  const norm = normalizeSubject(lessonStr);
  if (norm.includes('especialista ufba 1')) return 25;
  if (norm.includes('especialista ufba 2')) return 26;
  return null;
}

export function getLessonKey(subject?: string, lesson?: string): string | null {
  if (!subject || !lesson) return null;
  const cSub = getCanonicalSubject(subject);
  const num = getCanonicalLessonNum(lesson);
  if (num === null) return `${cSub}|${normalizeSubject(lesson)}`;
  return `${cSub}|aula-${num}`;
}

export function readLocalStudyPlanState(): StudyPlanCloudPayload {
  const safeParse = <T,>(key: string, fallback: T): T => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  };
  return {
    ufbaTaskIds: safeParse<Record<string, boolean>>(UFBA_STORAGE_KEY, {}),
    sefazTaskIds: safeParse<Record<string, boolean>>(SEFAZ_STORAGE_KEY, {}),
    questionsDoneKeys: safeParse<Record<string, boolean>>(QUESTIONS_DONE_STORAGE_KEY, {}),
    customDates: safeParse<Record<string, string>>(UFBA_CUSTOM_DATES_KEY, {}),
  };
}

export function writeLocalStudyPlanState(state: Partial<StudyPlanCloudPayload>, notify = true): void {
  try {
    if (state.ufbaTaskIds !== undefined) {
      localStorage.setItem(UFBA_STORAGE_KEY, JSON.stringify(state.ufbaTaskIds));
    }
    if (state.sefazTaskIds !== undefined) {
      localStorage.setItem(SEFAZ_STORAGE_KEY, JSON.stringify(state.sefazTaskIds));
    }
    if (state.questionsDoneKeys !== undefined) {
      localStorage.setItem(QUESTIONS_DONE_STORAGE_KEY, JSON.stringify(state.questionsDoneKeys));
    }
    if (state.customDates !== undefined) {
      localStorage.setItem(UFBA_CUSTOM_DATES_KEY, JSON.stringify(state.customDates));
    }
    if (notify && typeof window !== 'undefined') {
      window.dispatchEvent(new Event('ufba-plan-sync'));
    }
  } catch (e) {
    console.error('Failed to write local study plan state:', e);
  }
}

let syncInFlight: Promise<StudyPlanCloudPayload | null> | null = null;

export async function syncStudyPlanFromCloud(userId?: string): Promise<StudyPlanCloudPayload | null> {
  if (syncInFlight) return syncInFlight;

  syncInFlight = (async () => {
    try {
      let uid = userId;
      if (!uid) {
        const { data: sessionData } = await supabase.auth.getSession();
        uid = sessionData?.session?.user?.id;
      }
      if (!uid) return null;

      const { data, error } = await supabase
        .from('workout_settings')
        .select('id, weekly_routine, weekly_goal')
        .eq('user_id', uid)
        .maybeSingle();

      if (error) {
        console.error('Error fetching cloud study plan state:', error);
        return null;
      }

      const local = readLocalStudyPlanState();
      const routine = (data?.weekly_routine ?? {}) as Record<string, any>;
      const cloud = (routine._studyPlanSync ?? {}) as Partial<StudyPlanCloudPayload>;

      const mergedUfba: Record<string, boolean> = { ...(cloud.ufbaTaskIds || {}), ...local.ufbaTaskIds };
      // Ensure any truthy cloud task stays truthy unless explicitly toggled false locally when local already had state
      if (cloud.ufbaTaskIds) {
        for (const [k, v] of Object.entries(cloud.ufbaTaskIds)) {
          if (v === true && !(k in local.ufbaTaskIds)) {
            mergedUfba[k] = true;
          } else if (Object.keys(local.ufbaTaskIds).length === 0) {
            mergedUfba[k] = v;
          }
        }
      }

      const mergedSefaz: Record<string, boolean> = { ...(cloud.sefazTaskIds || {}), ...local.sefazTaskIds };
      if (cloud.sefazTaskIds) {
        for (const [k, v] of Object.entries(cloud.sefazTaskIds)) {
          if (v === true && !(k in local.sefazTaskIds)) {
            mergedSefaz[k] = true;
          } else if (Object.keys(local.sefazTaskIds).length === 0) {
            mergedSefaz[k] = v;
          }
        }
      }

      const mergedQuestions: Record<string, boolean> = {
        ...(cloud.questionsDoneKeys || {}),
        ...local.questionsDoneKeys,
      };
      // Normalize any legacy "economia|aula-X" keys to also set "afo|aula-X" if needed
      for (const [k, v] of Object.entries({ ...mergedQuestions })) {
        if (v && !k.includes('|b1') && !k.includes('|b2')) {
          mergedQuestions[`${k}|b1`] = true;
        }
      }

      const mergedDates: Record<string, string> = {
        ...(cloud.customDates || {}),
        ...local.customDates,
      };

      const merged: StudyPlanCloudPayload = {
        ufbaTaskIds: mergedUfba,
        sefazTaskIds: mergedSefaz,
        questionsDoneKeys: mergedQuestions,
        customDates: mergedDates,
        updatedAt: new Date().toISOString(),
      };

      writeLocalStudyPlanState(merged, true);

      // If local had more keys than cloud, push merged state back to cloud
      const cloudUfbaCount = Object.keys(cloud.ufbaTaskIds || {}).filter(k => cloud.ufbaTaskIds?.[k]).length;
      const mergedUfbaCount = Object.keys(mergedUfba).filter(k => mergedUfba[k]).length;
      const cloudQCount = Object.keys(cloud.questionsDoneKeys || {}).filter(k => cloud.questionsDoneKeys?.[k]).length;
      const mergedQCount = Object.keys(mergedQuestions).filter(k => mergedQuestions[k]).length;

      if (!routine._studyPlanSync || mergedUfbaCount > cloudUfbaCount || mergedQCount > cloudQCount) {
        await pushStudyPlanToCloud(uid, merged);
      }

      return merged;
    } catch (e) {
      console.error('Failed to sync study plan from cloud:', e);
      return null;
    } finally {
      syncInFlight = null;
    }
  })();

  return syncInFlight;
}

export async function pushStudyPlanToCloud(
  userId?: string,
  overrides?: Partial<StudyPlanCloudPayload>,
  replaceAll = false
): Promise<void> {
  try {
    if (overrides) {
      writeLocalStudyPlanState(overrides, true);
    }

    let uid = userId;
    if (!uid) {
      const { data: sessionData } = await supabase.auth.getSession();
      uid = sessionData?.session?.user?.id;
    }
    if (!uid) return;

    const currentLocal = readLocalStudyPlanState();
    const { data: existingRow } = await supabase
      .from('workout_settings')
      .select('id, weekly_routine, weekly_goal')
      .eq('user_id', uid)
      .maybeSingle();

    const baseRoutine = (existingRow?.weekly_routine as Record<string, any>) || {
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
    };

    const prevCloud = (replaceAll ? {} : (baseRoutine._studyPlanSync || {})) as Partial<StudyPlanCloudPayload>;

    const nextSync: StudyPlanCloudPayload = {
      ufbaTaskIds: replaceAll
        ? (overrides?.ufbaTaskIds ?? currentLocal.ufbaTaskIds)
        : { ...(prevCloud.ufbaTaskIds || {}), ...currentLocal.ufbaTaskIds, ...(overrides?.ufbaTaskIds || {}) },
      sefazTaskIds: replaceAll
        ? (overrides?.sefazTaskIds ?? currentLocal.sefazTaskIds)
        : { ...(prevCloud.sefazTaskIds || {}), ...currentLocal.sefazTaskIds, ...(overrides?.sefazTaskIds || {}) },
      questionsDoneKeys: replaceAll
        ? (overrides?.questionsDoneKeys ?? currentLocal.questionsDoneKeys)
        : { ...(prevCloud.questionsDoneKeys || {}), ...currentLocal.questionsDoneKeys, ...(overrides?.questionsDoneKeys || {}) },
      customDates: replaceAll
        ? (overrides?.customDates ?? currentLocal.customDates)
        : { ...(prevCloud.customDates || {}), ...currentLocal.customDates, ...(overrides?.customDates || {}) },
      updatedAt: new Date().toISOString(),
    };

    const updatedRoutine = {
      ...baseRoutine,
      _studyPlanSync: nextSync,
    };

    if (existingRow?.id) {
      await supabase
        .from('workout_settings')
        .update({ weekly_routine: updatedRoutine as any })
        .eq('id', existingRow.id);
    } else {
      await supabase.from('workout_settings').upsert(
        {
          user_id: uid,
          weekly_routine: updatedRoutine as any,
          weekly_goal: existingRow?.weekly_goal ?? 4,
        } as any,
        { onConflict: 'user_id' }
      );
    }
  } catch (e) {
    console.error('Failed to push study plan state to cloud:', e);
  }
}
