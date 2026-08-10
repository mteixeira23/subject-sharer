## Correção da atualização de questões

Vou ajustar o registro de questões para que, ao salvar/finalizar o quiz, as informações não sumam nem fiquem desatualizadas nos cards e na tabela de aulas.

### Problema identificado

O app salva a sessão em `question_sessions`, mas os cards calculam `Questões`, `Total Questões` e `Desempenho` principalmente a partir dos contadores da tabela `lessons`.

Hoje o código atualiza a aula usando apenas `subjectId + lessonNumber`. Se houver aulas de ciclos diferentes com o mesmo número, ou se a lista local estiver desatualizada, a contagem pode ser aplicada no registro errado ou não refletir imediatamente no ciclo atual.

### Mudanças propostas

1. **Corrigir o alvo da atualização da aula**
   - Em `src/hooks/useStudyData.ts`, ao adicionar/editar/excluir sessões de questões, localizar a aula do ciclo atual usando a mesma base de `currentCycleLessons` usada pelos cards.
   - Assim, o contador será aplicado exatamente na aula que aparece no card atual.

2. **Atualização otimista/imediata dos dados**
   - Após inserir uma sessão, atualizar o cache local de:
     - `questionSessions`
     - `lessons`
   - Isso evita o efeito de “salvei e a informação desapareceu/voltou para zero” enquanto a tela recarrega os dados.

3. **Tornar o card mais confiável**
   - Manter o card exibindo:
     - `Questões X/Y aulas`
     - `Total Questões`
     - `Desempenho`
   - Garantir que esses números reflitam as aulas do ciclo atual logo após salvar o quiz.

4. **Tratamento de erro no formulário**
   - Em `QuickQuestionForm.tsx`, aguardar o salvamento antes de fechar o modal.
   - Se der erro ao salvar, mostrar mensagem de erro e não apagar o quiz registrado na tela.

### Arquivos afetados

- `src/hooks/useStudyData.ts`
- `src/components/QuickQuestionForm.tsx`

### O que não muda

- Não vou alterar o banco de dados.
- Não vou mudar o fluxo visual do quiz.
- Não vou remover o histórico de questões existente.