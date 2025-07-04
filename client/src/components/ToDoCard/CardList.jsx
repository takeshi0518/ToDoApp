import axios from 'axios';
import dayjs from 'dayjs';

import { useState } from 'react';
import { createPortal } from 'react-dom';

import { EditModal } from '../EditModal';
import { CardItem } from './CardItem';
import { SubTitle } from '../SubTitle';
import { useTodoContext } from '../../context/TodoContext';
import { useTodoDispatchContext } from '../../context/TodoContext';

const URL = 'http://localhost:3001/todos';

const ModalPortal = ({ children }) => {
  const target = document.getElementById('modal-hook');
  return createPortal(children, target);
};

const CardList = () => {
  const dispatch = useTodoDispatchContext();
  const [todos, isLoading] = useTodoContext();
  const [isEdit, setEdit] = useState(false);
  const [targetTodo, setTargetTodo] = useState(null);
  const [editContent, setEditContent] = useState('');

  const handleComplete = async (id) => {
    await axios.delete(`${URL}/${id}`);
    dispatch({ type: 'delete', payload: id });
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    const editTodo = {
      ...targetTodo,
      date: dayjs().format('YYYY/MM/DD'),
      content: editContent,
    };
    await axios.patch(`${URL}/${targetTodo.id}`, {
      content: editContent,
      date: editTodo.date,
    });

    dispatch({ type: 'patch', payload: editTodo });
    setEdit(false);
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
            <ModalPortal>
              <EditModal
                todo={targetTodo}
                variant="edit"
                closeEditModal={closeEditModal}
                onChange={setEditContent}
                handleEdit={handleEdit}
              />
            </ModalPortal>
          )}
          {todos.map((todo) => (
            <CardItem
              variant="default"
              todo={todo}
              key={todo.id}
              complete={() => handleComplete(todo.id)}
              edit={() => openEditModal(todo)}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export { CardList };
