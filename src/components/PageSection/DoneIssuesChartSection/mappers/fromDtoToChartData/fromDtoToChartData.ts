import lodash from 'lodash';
import type { IssueDto } from '../../../../../services/types.dto';
import getWorkWeek from '../../../../../utils/getWorkWeek';
import type { DoneIssueChartData } from './types';

function getSumIssuesData(data: DoneIssueChartData[]): DoneIssueChartData[] {
  const result: DoneIssueChartData[] = [];

  const doneIssuesGroupedData = lodash.groupBy(data, 'workWeekNumber');

  // Перебор ключей с помощью Object.keys используется по указанию ESLint.
  const doneIssuesGroupedDataObjectKeys = Object.keys(doneIssuesGroupedData);

  doneIssuesGroupedDataObjectKeys.forEach((key) => {
    let Revenue = 0;
    let Expenses = 0;
    let Profit = 0;

    doneIssuesGroupedData[key].forEach((issue) => {
      Revenue += issue.Revenue;
      Expenses += issue.Expenses;
      Profit += issue.Revenue - issue.Expenses;
    });

    result.push({
      workWeekNumber: Number(key),
      Revenue,
      Expenses,
      Profit,
    });
  });

  return result;
}

// Функция будет работать правильно при условии передачи в неё данных за 1 календарный (рабочий) год.
export default function mapFromDtoToChartData(
  issuesList: IssueDto[],
  nLatestWeek: number
): DoneIssueChartData[] | [] {
  const doneIssuesList = issuesList.filter((issue) => issue.status === 'Done');
  const latestWeekByList = lodash.maxBy(doneIssuesList, (o) =>
    getWorkWeek(new Date(o.date_created))
  );

  if (latestWeekByList) {
    const latestDoneIssuesList = doneIssuesList.filter(
      (issue) =>
        getWorkWeek(new Date(issue.date_created)) >
        getWorkWeek(new Date(latestWeekByList.date_created)) - nLatestWeek
    );

    // Подсчитывает необходимые показатели для каждой issue.
    const calculatedNotGroupedDoneIssues: DoneIssueChartData[] =
      latestDoneIssuesList.map((issue) => {
        const Revenue = issue.received_from_client;
        const Expenses =
          issue.send_to_designer +
          issue.send_to_account_manager +
          issue.send_to_project_manager;

        return {
          workWeekNumber: getWorkWeek(new Date(issue.date_created)),
          Revenue,
          Expenses,
          Profit: Revenue - Expenses,
        };
      });

    // Суммирует показатели по каждой неделе и сортирует по возрастанию.
    return lodash.sortBy(
      getSumIssuesData(calculatedNotGroupedDoneIssues),
      'workWeekNumber'
    );
  }

  return [];
}
