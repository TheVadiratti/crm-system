import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import MetaProvider from './components/MetaProvider';
import './index.css';
import RouterProvider from './router';
import { store } from './store';
import './utils/i18n/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <MetaProvider>
        <RouterProvider />
      </MetaProvider>
    </Provider>
  </React.StrictMode>
);
