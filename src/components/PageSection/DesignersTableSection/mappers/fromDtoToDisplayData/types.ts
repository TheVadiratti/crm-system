import type { DesignerDto } from '../../../../../services/types.dto';

export interface DesignerDisplayData extends Omit<DesignerDto, 'issues'> {
  inProgressIssuesCount: number;
  doneIssuesCount: number;
}
