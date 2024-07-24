import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';
import type { IssueDto } from '../../../services/types.dto';
import { chartColors } from '../../../theme/colors';
import removeSpaces from '../../../utils/removeSpaces';
import PageSection from '../index';
import mapFromDtoToChartData from './mappers/fromDtoToChartData';

interface Props {
  issues: IssueDto[];
}

export default function IssuesStatusesChartSection({ issues }: Props) {
  const { t: localize } = useTranslation();

  const chartData = useMemo(() => mapFromDtoToChartData(issues), [issues]);

  return (
    <PageSection heading={localize('sectionHeadings.issuesStatusesChart')}>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Legend />
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            dataKey="count"
            nameKey="status"
            label
            labelLine={false}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${entry.status}`}
                fill={chartColors[index]}
                name={localize(
                  `IssuesStatusesChart.${removeSpaces(entry.status)}`
                )}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </PageSection>
  );
}
