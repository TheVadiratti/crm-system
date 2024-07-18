import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Locales, Themes } from '../../utils/constants';

interface MetaSliceState {
  locale: Locales;
  theme: Themes;
}

const initialState = {
  locale: Locales.russian,
  theme: Themes.light,
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

    changeTheme: (state, action: PayloadAction<Themes>) => {
      return {
        ...state,
        theme: action.payload,
      };
    },
  },
});

export const { changeLocale, changeTheme } = metaSlice.actions;
export default metaSlice;
