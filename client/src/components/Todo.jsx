import { MainTitle } from './MainTitle';
import { Container } from './Container';
import { TodoForm } from './TodoForm';

function Todo() {
  return (
    <Container>
      <MainTitle text="ToDoApp" variant="large" />
      <TodoForm />
    </Container>
  );
}

export { Todo };
