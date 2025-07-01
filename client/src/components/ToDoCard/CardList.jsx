import { CardItem } from './CardItem';
import { SubTitle } from '../SubTitle';
import { CardItemWrapper } from './CardItemWrapper';
import { useTodoContext } from '../../context/TodoContext';

const CardList = () => {
  const todos = useTodoContext();
  return (
    <section>
      <SubTitle text="ToDosList" variant="medium" />
      {todos.length === 0 ? (
        <p>表示できるToDoがありません</p>
      ) : (
        <CardItemWrapper>
          {todos.map((todo) => (
            <CardItem variant="default" todo={todo} key={todo.id} />
          ))}
        </CardItemWrapper>
      )}
    </section>
  );
};

export { CardList };
