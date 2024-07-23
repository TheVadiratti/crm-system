import { useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import LocaleSelect from '../../LocaleSelect';
import ThemeSwitch from '../../ThemeSwitch';
import WorkWeekNumber from '../../WorkWeekNumber';
import Navigation from './Navigation';

export default function HeaderDesktop() {
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <AppBar position="sticky" sx={{ p: '10px 0' }}>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', gap: isUpMd ? 3 : 1 }}>
          <Typography
            component="h1"
            variant="h4"
            sx={{
              display: 'flex',
              alignItems: 'end',
              color: 'common.white',
            }}
          >
            CRM
          </Typography>
          <Navigation />
        </Box>
        <Stack direction="row" spacing={isUpMd ? 2 : 0.5} alignItems="center">
          <LocaleSelect />
          <ThemeSwitch />
          <WorkWeekNumber />
        </Stack>
      </Container>
    </AppBar>
  );
}
