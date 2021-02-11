import React from 'react';
import FinancialRecord from '../../models/financial-record.model';

export type FinancialRecordListContextType = {
  financialRecords?: FinancialRecord[];
  findAllFinancialRecords?: () => any;
  isLoadingInitially?: boolean;
  setFinancialRecords?: React.Dispatch<React.SetStateAction<FinancialRecord[]>>;
  addRecord?: (record: FinancialRecord) => any;
  isAddingSuccess?: boolean;
  setIsAddingSuccess?: React.Dispatch<React.SetStateAction<boolean>>;
  isAddingLoading?: boolean;
  removeRecord?: (id: number) => any;
};

const FinancialRecordListContext = React.createContext<
  FinancialRecordListContextType
>({});

export default FinancialRecordListContext;
