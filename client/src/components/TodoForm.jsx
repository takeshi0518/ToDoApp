import { Button } from './Button';
import { Input } from './Input';
import { TodoFormContainer } from './layout/TodoFormContainer';

const TodoForm = () => {
  return (
    <TodoFormContainer>
      <Input variant="large" />
      <Button text="送信" variant="grayLarge" />
    </TodoFormContainer>
  );
};

export { TodoForm };
