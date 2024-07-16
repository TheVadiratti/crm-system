import {
  useSelector as useReduxSelector,
  type TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
} from 'react-redux';
import { Dispatch, RootState } from './store';

export const useDispatch = useReduxDispatch<Dispatch>;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
