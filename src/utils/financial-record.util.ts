import FinancialRecord from '../models/financial-record.model';

export const getTotalAmount = (items: FinancialRecord[]) => {
  const sum = items
    ?.map((item) => item?.amount)
    ?.reduce((prev, curr) => prev + curr, 0);

  return sum || 0;
};
