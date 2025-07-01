import axios from 'axios';
import { createContext, useContext, useReducer, useEffect } from 'react';

const URL = 'http://localhost:3001/todos';

const TodoContext = createContext();
const TodoDispatchContext = createContext();

const todoReducer = (todos, action) => {
  switch (action.type) {
    case 'get':
      return action.payload;
    default:
      return todos;
  }
};

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await axios.get(URL);
      dispatch({ type: 'get', payload: res.data });
    };
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

const useTodoContext = () => useContext(TodoContext);
const useTodoDispatchContext = () => useContext(TodoDispatchContext);

export { TodoProvider, useTodoContext, useTodoDispatchContext };
