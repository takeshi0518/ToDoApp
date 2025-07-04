import { MainTitle } from './MainTitle';
import { Container } from './layout/Container';
import { TodoForm } from './TodoForm';
import { CardList } from './ToDoCard/CardList';
import { TodoProvider } from '../context/TodoContext';

function Todo() {
  return (
    <Container>
      <MainTitle text="ToDoApp" variant="mainTitle" />
      <TodoProvider>
        <TodoForm />
        <CardList />
      </TodoProvider>
    </Container>
  );
}

export { Todo };
