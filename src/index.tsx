import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { GlobalStyles } from '@mui/material';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStyles styles={{ '*': { padding: '0', margin: '0' } }} />
    <App />
  </React.StrictMode>
);
