with open('src/components/study/StudyPlanModal.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

import re

# Find toggleDay
old_toggle_day = re.search(r'const toggleDay = \(day: DayPlan\) => \{.*?\};', content, re.DOTALL)
if old_toggle_day:
    new_toggle_day = """const toggleDay = (day: DayPlan) => {
    const allCompleted = day.tasks.every(t => completedTaskIds[t.id]);
    const newState = !allCompleted;

    setCompletedTaskIds(prev => {
      const next = { ...prev };
      day.tasks.forEach(t => {
        next[t.id] = newState;
      });
      return next;
    });

    if (newState) {
      toast.success(`Todas as tarefas do Dia ${day.dayNumber} concluídas! 🚀`);
      
      // Auto-sync all lessons in this day to global studyData
      day.tasks.forEach(task => {
        if (task.subject && task.lesson) {
          try {
            const sub = studyData.subjects.find(
              s => s.name.trim().toLowerCase() === task.subject?.trim().toLowerCase()
            );
            if (sub) {
              const matchLessonNum = task.lesson.match(/\\d+/);
              if (matchLessonNum) {
                const lessonNumber = parseInt(matchLessonNum[0]);
                updateLesson(sub.id, { theoryCompleted: true }, sub.id, lessonNumber);
              }
            }
          } catch (e) {}
        }
      });
    }
  };"""
    content = content.replace(old_toggle_day.group(0), new_toggle_day)

with open('src/components/study/StudyPlanModal.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
