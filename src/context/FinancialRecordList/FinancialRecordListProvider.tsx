import React, {useState} from 'react';
import FinancialRecordDal from '../../dal/financial-record.dal';
import FinancialRecord from '../../models/financial-record.model';
import FinancialRecordListContext from './FinancialRecordListContext';

/**
 * Context Hook holding financial record list manipulation
 * @param props
 */
const FinancialRecordListProvider = ({children}) => {
  const [financialRecords, setFinancialRecords] = useState<
    FinancialRecord[] | null
  >();
  const [isLoadingInitially, setIsLoadingInitially] = useState(false);
  const [isAddingSuccess, setIsAddingSuccess] = useState(false);
  const [isAddingLoading, setIsAddingLoading] = useState(false);

  /**
   * Retreives all financial records in db
   */
  const findAllFinancialRecords = async () => {
    setIsLoadingInitially(true);
    const result = await FinancialRecordDal.findAll();
    setFinancialRecords(result);
    setIsLoadingInitially(false);
  };

  /**
   * Adds finacial record to record list
   * @param record
   */
  const addRecord = async (record: FinancialRecord) => {
    setIsAddingLoading(true);
    await FinancialRecordDal.create(record);
    setFinancialRecords((recordArr) => [record, ...recordArr]);
    setIsAddingLoading(false);
    setIsAddingSuccess(true);
    setIsAddingSuccess(false);
  };

  const contextValue = {
    financialRecords,
    findAllFinancialRecords,
    isLoadingInitially,
    setFinancialRecords,
    addRecord,
    isAddingSuccess,
    setIsAddingSuccess,
    isAddingLoading,
  };

  return (
    <FinancialRecordListContext.Provider value={contextValue}>
      {children}
    </FinancialRecordListContext.Provider>
  );
};

export default FinancialRecordListProvider;
