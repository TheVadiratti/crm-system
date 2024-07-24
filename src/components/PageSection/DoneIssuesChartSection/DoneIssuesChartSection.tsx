import { useMemo, useState, type MouseEvent } from 'react';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { IssueDto } from '../../../services/types.dto';
import PageSection from '../index';
import mapFromDtoToChartData from './mappers/fromDtoToChartData/fromDtoToChartData';

interface Props {
  issues: IssueDto[];
}

export default function DoneIssuesChartSection({ issues }: Props) {
  const [numberShownWeek, setNumberShownWeek] = useState(8);
  const { t: localize } = useTranslation();

  const chartData = useMemo(
    () => mapFromDtoToChartData(issues, numberShownWeek),
    [issues, numberShownWeek]
  );

  const handleChange = (
    _event: MouseEvent<HTMLElement>,
    newNumberShownWeek: number
  ) => {
    setNumberShownWeek(newNumberShownWeek);
  };

  return (
    <PageSection heading={localize('sectionHeadings.doneIssuesChart')}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography variant="body2">
          {localize('DoneIssuesChartSection.shownWeekNumber')}
        </Typography>
        <ToggleButtonGroup
          exclusive
          size="small"
          value={numberShownWeek}
          onChange={handleChange}
        >
          <ToggleButton value={4}>4</ToggleButton>
          <ToggleButton value={8}>8</ToggleButton>
          <ToggleButton value={12}>12</ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="workWeekNumber" />
          <YAxis />
          <Tooltip labelStyle={{ color: 'black' }} />
          <Legend />
          <Bar
            dataKey="Revenue"
            name={localize('DoneIssuesChart.revenue')}
            fill="#8884d8"
          />
          <Bar
            dataKey="Expenses"
            name={localize('DoneIssuesChart.expenses')}
            fill="#5284a4"
          />
          <Bar
            dataKey="Profit"
            name={localize('DoneIssuesChart.profit')}
            fill="#2244a2"
          />
        </BarChart>
      </ResponsiveContainer>
    </PageSection>
  );
}
