import type { IssuesStatusDto } from '../../../../../services/types.dto';

export interface IssueStatusChartData {
  status: IssuesStatusDto;
  count: number;
}
