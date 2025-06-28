import { MainTitle } from './MainTitle';
import { Container } from './Container';

function Todo() {
  return (
    <Container>
      <MainTitle text="ToDoApp" className="sm:text-5xl md:text-6xl" />
    </Container>
  );
}

export { Todo };
