import type { IssueDto } from '../../../../../services/types.dto';
import { IssueStatusChartData } from './types';

export default function mapFromDtoToChartData(
  issuesList: IssueDto[]
): IssueStatusChartData[] {
  let newCount = 0;
  let inProgressCount = 0;
  let doneCount = 0;

  issuesList.forEach((issue) => {
    switch (issue.status) {
      case 'New':
        newCount += 1;
        break;
      case 'In Progress':
        inProgressCount += 1;
        break;
      case 'Done':
        doneCount += 1;
        break;
      default:
        break;
    }
  });

  return [
    { status: 'New', count: newCount },
    { status: 'In Progress', count: inProgressCount },
    { status: 'Done', count: doneCount },
  ];
}
