import { useMemo } from 'react';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import getWeek from '../../utils/getWeek';

export default function WeekNumber() {
  const { t: localize } = useTranslation();

  const weekNumber = useMemo(() => getWeek(new Date()), []);

  return (
    <Typography variant="body2" component="p">
      {`${localize('header.weekNumber')} `}
      <Typography variant="body2" component="strong" fontWeight={800}>
        {weekNumber}
      </Typography>
    </Typography>
  );
}
