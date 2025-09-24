import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/tailwind.css';
import { Todo } from './components/Todo.jsx';
import { Login } from './components/Login.jsx';
import { Register } from './components/Register.jsx';
import { NotFound } from './components/NotFound.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { PrivateRoute } from './components/PrivateRoute.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/todos"
            element={
              <PrivateRoute>
                <Todo />
              </PrivateRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
