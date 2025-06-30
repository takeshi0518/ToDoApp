import { MainTitle } from './MainTitle';
import { Container } from './layout/Container';
import { TodoForm } from './TodoForm';
import { CardList } from './ToDoCard/CardList';

function Todo() {
  return (
    <Container>
      <MainTitle text="ToDoApp" variant="large" />
      <TodoForm />
      <CardList />
    </Container>
  );
}

export { Todo };
