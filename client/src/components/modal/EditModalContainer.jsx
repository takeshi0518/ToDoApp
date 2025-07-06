import { useState, memo } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';

const URL = 'http://localhost:3001/todos';
import { useTodoDispatchContext } from '../../context/TodoContext';
import { ModalPortal } from './ModalPortal';
import { EditModal } from './EditModal';

const EditModalContainer = memo(({ todo, closeEditModal }) => {
  const dispatch = useTodoDispatchContext();
  const [editContent, setEditContent] = useState(todo.content);

  const handleEdit = async (e) => {
    e.preventDefault();

    const editTodo = {
      ...todo,
      content: editContent,
      date: dayjs().format('YYYY/MM/DD'),
    };

    await axios.patch(`${URL}/${todo.id}`, editTodo);
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
      />
    </ModalPortal>
  );
});

export { EditModalContainer };
