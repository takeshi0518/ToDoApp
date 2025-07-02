import { nanoid } from 'nanoid';
import dayjs from 'dayjs';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { useTodoDispatchContext } from '../context/TodoContext';
import { Button } from './Button';
import { Input } from './Input';
import { TodoFormContainer } from './layout/TodoFormContainer';

const URL = 'http://localhost:3001/todos';

const TodoForm = () => {
  const [content, setContent] = useState('');
  const [isError, setIsError] = useState(false);
  const dispatch = useTodoDispatchContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (content.trim() === '') {
      setIsError(true);
      return;
    }

    const newTodo = {
      id: nanoid(),
      date: dayjs().format('YYYY/MM/DD'),
      content,
    };

    const res = await axios.post(URL, newTodo);
    dispatch({ type: 'post', payload: res.data });

    setContent('');
    setIsError(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsError(false), 3000);
    return () => clearTimeout(timer);
  }, [isError]);

  return (
    <section>
      {isError && (
        <p className="text-red text-left mb-2">
          空白です。ToDoを入力してください
        </p>
      )}
      <TodoFormContainer onSubmit={handleSubmit}>
        <Input
          variant="large"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <Button text="送信" variant="grayLarge" type="submit" />
      </TodoFormContainer>
    </section>
  );
};

export { TodoForm };
