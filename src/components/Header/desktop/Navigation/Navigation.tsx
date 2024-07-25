import { type SyntheticEvent } from 'react';
import { SxProps, Theme } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import routes from '../../../../router/routes';

const TabSxStyles: SxProps<Theme> = {
  color: 'common.white',
  '&.Mui-selected': {
    color: 'common.white',
  },
};

export default function Navigation() {
  const { t: localize } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (_event: SyntheticEvent, value: string) => {
    navigate(value);
  };

  return (
    <Tabs
      value={location.pathname}
      onChange={handleChange}
      sx={{
        '.MuiTabs-indicator': {
          backgroundColor: 'common.white',
        },
      }}
    >
      <Tab
        label={localize('pageHeadings.main')}
        value={routes.main.index}
        sx={TabSxStyles}
      />
      <Tab
        label={localize('pageHeadings.issues')}
        value={routes.issues.index}
        sx={TabSxStyles}
      />
      <Tab
        label={localize('pageHeadings.designers')}
        value={routes.designers.index}
        sx={TabSxStyles}
      />
    </Tabs>
  );
}
