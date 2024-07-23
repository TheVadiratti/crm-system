import { differenceInHours } from 'date-fns';
import lodash from 'lodash';
import { type DesignerDto } from '../../../../services/types.dto';
import getMedianNumberFromArray from '../../../../utils/getMedianNumberFromArray';

interface DesignerDisplayData extends DesignerDto {
  issueMedianTime: number;
  doneIssuesCount: number;
}

export default function mapFromDtoToDisplayData(
  designersList: DesignerDto[]
): DesignerDisplayData[] {
  const displayData = designersList.map((designer) => {
    // Подготавливает массив затраченных часов на каждую задачу (разница между временем начала и конца работы над
    // задачей) для конкретного дизайнера.
    let forMedianCalcArray = designer.issues.map((issue) => {
      const {
        status,
        date_started_by_designer: startISO,
        date_finished_by_designer: finishISO,
      } = issue;

      // Если задача не закончена - не считает, возвращает null.
      if (status === 'In Progress' || !finishISO) {
        return null;
      }

      const startDate = new Date(startISO);
      const finishDate = new Date(finishISO);

      // Получает разницу в часах.
      return differenceInHours(finishDate, startDate);
    });

    // Убирает из массива данные о незаконченных задачах (со значением null).
    forMedianCalcArray = forMedianCalcArray.filter(Number);

    return {
      ...designer,
      issueMedianTime: forMedianCalcArray.length
        ? getMedianNumberFromArray(forMedianCalcArray as number[])
        : 0,
      doneIssuesCount: forMedianCalcArray.length,
    };
  });

  // Сортирует и обрезает до топ 10.
  return lodash.orderBy(
    displayData,
    ['completedIssuesCount', 'issueMedianTime'],
    ['desc', 'asc']
  );
}
