import axios from 'axios';

import { CardItem } from './CardItem';
import { SubTitle } from '../SubTitle';
import { CardItemWrapper } from './CardItemWrapper';
import { useTodoContext } from '../../context/TodoContext';
import { useTodoDispatchContext } from '../../context/TodoContext';

const URL = 'http://localhost:3001/todos';

const CardList = () => {
  const dispatch = useTodoDispatchContext();
  const todos = useTodoContext();

  const handleComplete = async (id) => {
    await axios.delete(`${URL}/${id}`);
    dispatch({ type: 'delete', payload: id });
  };

  return (
    <section>
      <SubTitle text="ToDosList" variant="medium" />
      {todos.length === 0 ? (
        <p>表示できるToDoがありません</p>
      ) : (
        <CardItemWrapper>
          {todos.map((todo) => (
            <CardItem
              variant="default"
              todo={todo}
              key={todo.id}
              complete={() => handleComplete(todo.id)}
            />
          ))}
        </CardItemWrapper>
      )}
    </section>
  );
};

export { CardList };
