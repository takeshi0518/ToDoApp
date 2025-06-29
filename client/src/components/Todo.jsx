import { MainTitle } from './MainTitle';
import { Container } from './Container';
import { TodoForm } from './TodoForm';
import { SubTitle } from './SubTitle';

function Todo() {
  return (
    <Container>
      <MainTitle text="ToDoApp" variant="large" />
      <TodoForm />
      <SubTitle text="ToDosList" variant="medium" />
    </Container>
  );
}

export { Todo };
