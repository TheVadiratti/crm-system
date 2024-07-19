import {
  configureStore,
  type Store,
  combineSlices,
  type Reducer,
} from '@reduxjs/toolkit';
import commentsApi from '../services/comments';
import metaSlice from './meta';

const rootReducer: Reducer = combineSlices({
  [metaSlice.name]: metaSlice.reducer,
  [commentsApi.reducerPath]: commentsApi.reducer,
});

export const store: Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(commentsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
