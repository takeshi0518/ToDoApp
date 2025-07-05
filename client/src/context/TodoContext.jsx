import axios from 'axios';
import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from 'react';

const URL = 'http://localhost:3001/todos';

const TodoContext = createContext();
const TodoDispatchContext = createContext();

const todoReducer = (todos, action) => {
  switch (action.type) {
    case 'get':
      return action.payload;
    case 'post':
      return [...todos, action.payload];
    case 'delete':
      return todos.filter((_todo) => _todo.id !== action.payload);
    case 'patch':
      return todos.map((_todo) => {
        return _todo.id === action.payload.id ? action.payload : _todo;
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

export { TodoProvider, useTodoContext, useTodoDispatchContext };
