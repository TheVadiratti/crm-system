import type { DesignerDto } from '../../../../../services/types.dto';
import type { DesignerDisplayData } from './types';

export default function mapFromDtoToDisplayData(
  designers: DesignerDto[]
): DesignerDisplayData[] {
  return designers.map((designer) => {
    const { issues, ...rest } = designer;
    let inProgressIssuesCount = 0;
    let doneIssuesCount = 0;

    issues.forEach((issue) => {
      if (issue.status === 'In Progress') {
        inProgressIssuesCount += 1;
      }

      if (issue.status === 'Done') {
        doneIssuesCount += 1;
      }
    });

    return {
      ...rest,
      inProgressIssuesCount,
      doneIssuesCount,
    };
  });
}
