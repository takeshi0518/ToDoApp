import { MainTitle } from './MainTitle';
import { Container } from './layout/Container';
import { TodoForm } from './TodoForm';
import { CardList } from './ToDoCard/CardList';
import { TodoProvider } from '../context/TodoContext';
import { useAuthContext } from '../context/AuthContext';
import { SpinnerIcon } from './SpinnerIcon';

function Todo() {
  const { user } = useAuthContext();

  return (
    <Container>
      <MainTitle text="ToDoApp" variant="mainTitle" />
      <p>ようこそ{user.username}さん</p>
      <TodoProvider>
        <TodoForm />
        <CardList />
      </TodoProvider>
    </Container>
  );
}

export { Todo };
