with open('src/components/study/StudyPlanModal.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("'Fase 2: Intensivo FGV'", "'Fase 2: Intensivo Cesgranrio'")
content = content.replace("Fase 2: Intensivo FGV", "Fase 2: Intensivo Cesgranrio")

with open('src/components/study/StudyPlanModal.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
