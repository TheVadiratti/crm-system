import {
  configureStore,
  type Store,
  combineSlices,
  type Reducer,
} from '@reduxjs/toolkit';
import api from '../services/api';
import metaSlice from './meta';

const rootReducer: Reducer = combineSlices({
  [metaSlice.name]: metaSlice.reducer,
  [api.reducerPath]: api.reducer,
});

export const store: Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
