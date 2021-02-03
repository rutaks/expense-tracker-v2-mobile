import FinancialRecord from '../models/financial-record.model';

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const getTime = (date?: Date) => {
  return date != null ? date.getTime() : 0;
};

export const sortByDueDate = (arr: FinancialRecord[]) => {
  return arr.sort((a: FinancialRecord, b: FinancialRecord) => {
    return getTime(b.occurredOn) - getTime(a.occurredOn);
  });
};
