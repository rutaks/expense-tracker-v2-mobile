import React from 'react';
import FinancialRecord from '../../models/financial-record.model';

export type FinancialRecordListContextType = {
  financialRecords?: FinancialRecord[];
  findAllFinancialRecords?: () => any;
  isLoadingInitially?: boolean;
  setFinancialRecords?: React.Dispatch<React.SetStateAction<FinancialRecord[]>>;
};

const FinancialRecordListContext = React.createContext<
  FinancialRecordListContextType
>({});

export default FinancialRecordListContext;
