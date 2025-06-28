import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './tailwind.css';
import App from './App.jsx';
import { Container } from './components/Container.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container>
      <App />
    </Container>
  </StrictMode>
);
