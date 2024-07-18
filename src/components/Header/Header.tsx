import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import HeaderDesktop from './desktop';
import HeaderMobile from './mobile';

export default function Header() {
  const theme = useTheme();
  const isUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  if (isUpSm) {
    return <HeaderDesktop />;
  }

  return <HeaderMobile />;
}
