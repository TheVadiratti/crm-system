import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import MetaProvider from './components/MetaProvider';
import './index.css';
import RouterProvider from './router';
import { store } from './store';
import { persistor } from './store/store';
import './utils/i18n/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MetaProvider>
          <CssBaseline />
          <RouterProvider />
        </MetaProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
