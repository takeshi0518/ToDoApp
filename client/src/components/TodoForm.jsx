import { Button } from './Button';
import { Input } from './Input';
import { TodoFormContainer } from './TodoFormContainer';

const TodoForm = () => {
  return (
    <TodoFormContainer>
      <Button text="送信" variant="grayLarge" margin="mr-5" />
      <Input variant="large" />
    </TodoFormContainer>
  );
};

export { TodoForm };
