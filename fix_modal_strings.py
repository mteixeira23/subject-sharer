with open('src/components/study/StudyPlanModal.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("144 Dias", "88 Dias")
content = content.replace("Treinamento FGV", "Treinamento Cesgranrio")
content = content.replace("Dias 1 a 98", "Dias 1 a 60")
content = content.replace("Dias 99 a 128", "Dias 61 a 78")
content = content.replace("Dias 129 a 144", "Dias 79 a 88")

with open('src/components/study/StudyPlanModal.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
