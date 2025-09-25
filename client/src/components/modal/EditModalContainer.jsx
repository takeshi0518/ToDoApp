import { useState, memo, useEffect, useRef } from 'react';
import axios from 'axios';

const URL = import.meta.env.VITE_API_URL;

import { useTodoDispatchContext } from '../../context/TodoContext';
import { ModalPortal } from './ModalPortal';
import { EditModal } from './EditModal';

const EditModalContainer = memo(({ todo, closeEditModal }) => {
  const dispatch = useTodoDispatchContext();
  const [editContent, setEditContent] = useState(todo.content);

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleEdit = async (e) => {
    e.preventDefault();

    const editTodo = {
      ...todo,
      content: editContent,
    };

    await axios.patch(`${URL}/${todo._id}`, editTodo, {
      withCredentials: true,
    });
    dispatch({ type: 'patch', payload: editTodo });
    closeEditModal();
  };

  return (
    <ModalPortal>
      <EditModal
        todo={todo}
        variant="edit"
        closeEditModal={closeEditModal}
        onChange={setEditContent}
        handleEdit={handleEdit}
        ref={inputRef}
      />
    </ModalPortal>
  );
});

export { EditModalContainer };
