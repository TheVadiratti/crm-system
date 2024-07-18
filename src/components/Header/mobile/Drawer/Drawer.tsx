import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import LocaleSelect from '../../../LocaleSelect';
import ThemeSwitch from '../../../ThemeSwitch';
import Navigation from './Navigation';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function Drawer({ open, onClose }: Props) {
  const { t: localize } = useTranslation();

  return (
    <MuiDrawer
      open={open}
      onClose={onClose}
      anchor="top"
      sx={{
        '.MuiDrawer-paper': {
          height: '100vh',
        },
      }}
    >
      <Container
        sx={{ py: '20px', display: 'flex', flexDirection: 'column', gap: 5 }}
      >
        <IconButton onClick={onClose} size="large" sx={{ alignSelf: 'end' }}>
          <CloseIcon fontSize="large" />
        </IconButton>
        <Typography
          variant="h5"
          component="p"
          align="center"
          textTransform="uppercase"
        >
          {localize('header.heading')}
        </Typography>
        <Navigation onLinkClick={onClose} />
        <LocaleSelect />
        <ThemeSwitch />
      </Container>
    </MuiDrawer>
  );
}
