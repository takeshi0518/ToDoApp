import { MainTitle } from './MainTitle';
import { Container } from './Container';
import { TextColor } from '../styles/baseColor';

function Todo() {
  return (
    <Container>
      <MainTitle text="ToDoApp" variant="large" />
    </Container>
  );
}

export { Todo };
