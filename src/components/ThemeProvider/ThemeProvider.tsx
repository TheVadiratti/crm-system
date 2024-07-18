import { type ReactNode, useMemo, useEffect } from 'react';
import { createTheme, useMediaQuery } from '@mui/material';
import * as locales from '@mui/material/locale';
import MuiThemeProvider from '@mui/material/styles/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from '../../store';
import { changeTheme } from '../../store/meta';
import { Themes } from '../../utils/constants';
import getLangFromLocaleName from '../../utils/getLangFromLocaleName';

interface Props {
  children: ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  const dispatch = useDispatch();
  const { theme: mode, locale: localeName } = useSelector(
    (state) => state.meta
  );
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const { i18n } = useTranslation();

  useEffect(() => {
    if (prefersDarkMode) {
      dispatch(changeTheme(Themes.dark));
    }
  }, [dispatch, prefersDarkMode]);

  useEffect(() => {
    i18n.changeLanguage(getLangFromLocaleName(localeName));
  }, [i18n, localeName]);

  const theme = useMemo(
    () =>
      createTheme(
        {
          palette: {
            mode,
          },
        },
        locales[localeName as keyof object]
      ),
    [localeName, mode]
  );

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
