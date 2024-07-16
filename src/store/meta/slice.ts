import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Locales } from '../../utils/constants';

interface MetaSliceState {
  locale: Locales;
}

const initialState = {
  locale: Locales.russian,
} satisfies MetaSliceState as MetaSliceState;

const metaSlice = createSlice({
  name: 'meta',
  initialState,
  reducers: {
    changeLocale: (state, action: PayloadAction<Locales>) => {
      return {
        ...state,
        locale: action.payload,
      };
    },
  },
});

export const { changeLocale } = metaSlice.actions;
export default metaSlice;
