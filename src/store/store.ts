import {
  configureStore,
  type Store,
  combineSlices,
  type Reducer,
} from '@reduxjs/toolkit';
import metaSlice from './meta';

const rootReducer: Reducer = combineSlices({
  [metaSlice.name]: metaSlice.reducer,
});

export const store: Store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
