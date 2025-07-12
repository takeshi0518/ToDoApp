import axios from 'axios';

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from 'react';

const URL = import.meta.env.VITE_API_URL;

const TodoContext = createContext();
const TodoDispatchContext = createContext();

const todoReducer = (todos, action) => {
  switch (action.type) {
    case 'get':
      return action.payload;
    case 'post':
      return [...todos, action.payload];
    case 'delete':
      return todos.filter((_todo) => _todo._id !== action.payload);
    case 'patch':
      return todos.map((_todo) => {
        return _todo._id === action.payload._id ? action.payload : _todo;
      });
    default:
      return todos;
  }
};

const TodoProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await axios.get(URL);
      dispatch({ type: 'get', payload: res.data });
      setIsLoading(false);
    };
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, isLoading }}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

const useTodoContext = () => useContext(TodoContext);
const useTodoDispatchContext = () => useContext(TodoDispatchContext);

export { TodoProvider, useTodoContext, useTodoDispatchContext, todoReducer };
