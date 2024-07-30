import { type ReactNode, useMemo, useEffect } from 'react';
import { createTheme } from '@mui/material';
import * as locales from '@mui/material/locale';
import MuiThemeProvider from '@mui/material/styles/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { useSelector } from '../../store';
import getLangFromLocaleName from '../../utils/getLangFromLocaleName';

interface Props {
  children: ReactNode;
}

export default function MetaProvider({ children }: Props) {
  const { theme: mode, locale: localeName } = useSelector(
    (state) => state.meta
  );
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(getLangFromLocaleName(localeName));
  }, [i18n, localeName]);

  const theme = useMemo(
    () =>
      createTheme(
        {
          breakpoints: {
            values: {
              xs: 0,
              sm: 675,
              md: 900,
              lg: 1200,
              xl: 1536,
            },
          },
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
