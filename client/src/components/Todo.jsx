import { MainTitle } from './MainTitle';
import { Container } from './Container';
import { TextColor } from '../styles/baseColor';
import { TodoForm } from './TodoForm';

function Todo() {
  return (
    <Container>
      <MainTitle
        text="ToDoApp"
        className="sm:text-5xl md:text-6xl"
        fontColor={TextColor.baseText}
      />
      <TodoForm />
    </Container>
  );
}

export { Todo };
