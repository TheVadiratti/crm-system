import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import RouterProvider from './router';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <RouterProvider />
    </Provider>
  </React.StrictMode>
);
