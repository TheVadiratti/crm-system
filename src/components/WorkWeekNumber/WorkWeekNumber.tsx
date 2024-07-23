import { useMemo } from 'react';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import getWorkWeek from '../../utils/getWorkWeek';

export default function WorkWeekNumber() {
  const { t: localize } = useTranslation();

  const workWeekNumber = useMemo(() => getWorkWeek(new Date()), []);

  return (
    <Typography
      variant="body2"
      component="p"
      color="common.white"
      textAlign="center"
      sx={{ minWidth: '92px' }}
    >
      {`${localize('header.weekNumber')} `}
      <Typography variant="body2" component="strong" fontWeight={800}>
        {workWeekNumber}
      </Typography>
    </Typography>
  );
}
