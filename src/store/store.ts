import {
  configureStore,
  type Store,
  combineSlices,
  type Reducer,
} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import api from '../services/api';
import metaSlice from './meta';

const persistConfig = {
  key: 'meta',
  storage,
};

const rootReducer: Reducer = combineSlices({
  [metaSlice.name]: persistReducer(persistConfig, metaSlice.reducer),
  [api.reducerPath]: api.reducer,
});

export const store: Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
