import { getISOWeek, subHours } from 'date-fns';

export default function getWorkWeek(date: Date) {
  return getISOWeek(subHours(date, 11));
}
