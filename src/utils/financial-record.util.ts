import FinancialRecordType from '../enums/financial-record-type.enum';
import FinancialRecord from '../models/financial-record.model';

export const getTotalAmount = (items: FinancialRecord[]) => {
  return getIncomeSum(items) - getExpenseSum(items) || 0;
};

export const getExpenseSum = (items: FinancialRecord[]) => {
  return (
    items
      ?.filter((item) => item.type === FinancialRecordType.EXPENSE)
      ?.map((item) => item?.amount)
      ?.reduce((prev, curr) => Number(prev) + Number(curr), 0) || 0
  );
};

export const getIncomeSum = (items: FinancialRecord[]) => {
  return (
    items
      ?.filter((item) => item.type === FinancialRecordType.INCOME)
      ?.map((item) => item?.amount)
      ?.reduce((prev, curr) => Number(prev) + Number(curr), 0) || 0
  );
};
