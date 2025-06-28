import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './tailwind.css';
import { Todo } from './components/Todo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todo />
  </StrictMode>
);
