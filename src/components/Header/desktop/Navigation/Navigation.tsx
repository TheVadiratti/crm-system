import { type SyntheticEvent } from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import routes from '../../../../router/routes';

export default function Navigation() {
  const { t: localize } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (_event: SyntheticEvent, value: string) => {
    navigate(value);
  };

  return (
    <Tabs value={location.pathname} onChange={handleChange}>
      <Tab label={localize('pageHeaders.main')} value={routes.main.index} />
      <Tab label={localize('pageHeaders.tasks')} value={routes.tasks.index} />
      <Tab
        label={localize('pageHeaders.designers')}
        value={routes.designers.index}
      />
    </Tabs>
  );
}
