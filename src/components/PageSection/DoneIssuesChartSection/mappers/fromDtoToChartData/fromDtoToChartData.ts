import lodash from 'lodash';
import type { IssueDto } from '../../../../../services/types.dto';
import getWorkWeek from '../../../../../utils/getWorkWeek';
import type { DoneIssueChartData } from './types';

export default function mapFromDtoToChartData(
  issuesList: IssueDto[],
  nLatestWeek: number
): DoneIssueChartData[] | [] {
  let result: DoneIssueChartData[] = [];

  issuesList.forEach((issue) => {
    if (issue.status === 'Done') {
      const Revenue = issue.received_from_client;
      const Expenses =
        issue.send_to_designer +
        issue.send_to_account_manager +
        issue.send_to_project_manager;
      const Profit = Revenue - Expenses;
      const workWeekNumber = getWorkWeek(new Date(issue.date_created));

      let hasInResult = false;

      result = result.map((item) => {
        if (item.workWeekNumber === workWeekNumber) {
          hasInResult = true;
          return {
            workWeekNumber,
            Revenue: item.Revenue + Revenue,
            Expenses: item.Expenses + Expenses,
            Profit: item.Profit + Profit,
          };
        }
        return item;
      });

      if (!hasInResult) {
        result.push({
          workWeekNumber,
          Revenue,
          Expenses,
          Profit,
        });
      }
    }
  });

  return lodash.sortBy(result, ['workWeekNumber']).slice(-nLatestWeek);
}
