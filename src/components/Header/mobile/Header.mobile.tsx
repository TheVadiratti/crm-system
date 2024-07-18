import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import WeekNumber from '../../WeekNumber';
import Drawer from './Drawer';

export default function HeaderMobile() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const toggleDrawer = (newState: boolean) => () => {
    setIsOpenDrawer(newState);
  };

  return (
    <AppBar position="sticky">
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <IconButton
          onClick={toggleDrawer(true)}
          sx={{
            width: 'fit-content',
            '&.MuiIconButton-colorPrimary': {
              color: 'text.primary',
            },
          }}
          size="large"
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <WeekNumber />
      </Container>

      <Drawer open={isOpenDrawer} onClose={toggleDrawer(false)} />
    </AppBar>
  );
}
