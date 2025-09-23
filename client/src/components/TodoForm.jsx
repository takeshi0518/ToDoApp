import axios from 'axios';
import { useState, useEffect } from 'react';

import { useTodoDispatchContext } from '../context/TodoContext';
import { Button } from './Button';
import { Input } from './Input';

const URL = import.meta.env.VITE_API_URL;

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
      <form
        onSubmit={handleSubmit}
        className="mb-10 sm:mb-20 md:mb-24 lg:mb-28 flex flex-col sm:flex sm:flex-row sm:items-stretch sm:justify-center"
      >
        <Input
          variant="large"
          onChange={(e) => setContent(e.target.value)}
          value={content}
          type="text"
          placeholderText="Todoを入力してください"
        />
        <Button text="送信" variant="grayLarge" type="submit" />
      </form>
    </section>
  );
};

export { TodoForm };
