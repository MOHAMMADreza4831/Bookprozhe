import { createRoot } from 'react-dom/client';
import '@src/styles/fonts.css';
import '@src/styles/index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <App />
)
