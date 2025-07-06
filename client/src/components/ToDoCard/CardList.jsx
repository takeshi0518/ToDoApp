import axios from 'axios';
import { useState } from 'react';

import { EditModalContainer } from '../modal/EditModalContainer';
import { CardItem } from './CardItem';
import { SubTitle } from '../SubTitle';
import { useTodoContext } from '../../context/TodoContext';
import { useTodoDispatchContext } from '../../context/TodoContext';

const URL = 'http://localhost:3001/todos';

const CardList = () => {
  const dispatch = useTodoDispatchContext();
  const { todos, isLoading } = useTodoContext();
  const [isEdit, setEdit] = useState(false);
  const [targetTodo, setTargetTodo] = useState(null);

  const handleComplete = async (id) => {
    await axios.delete(`${URL}/${id}`);
    dispatch({ type: 'delete', payload: id });
  };

  const openEditModal = (todo) => {
    setTargetTodo(todo);
    setEdit(true);
  };

  const closeEditModal = () => {
    setEdit(false);
  };

  if (isLoading) return null;

  return (
    <section>
      <SubTitle text="ToDosList" variant="subTitle" />
      {todos.length === 0 ? (
        <p>表示できるToDoがありません</p>
      ) : (
        <ul className="p-8 grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-4">
          {isEdit && (
            <EditModalContainer
              todo={targetTodo}
              closeEditModal={closeEditModal}
            />
          )}
          {todos.map((todo) => {
            const onComplete = () => handleComplete(todo.id);
            const onEdit = () => openEditModal(todo);

            return (
              <CardItem
                variant="default"
                todo={todo}
                key={todo.id}
                complete={onComplete}
                edit={onEdit}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
};

export { CardList };
