import {useContext} from 'react';

import FinancialRecordListContext, {
  FinancialRecordListContextType,
} from './FinancialRecordListContext';

/**
 * Context Hook holding financial record list manipulation
 */
const useFinancialRecordList = (): FinancialRecordListContextType => {
  const context = useContext(FinancialRecordListContext);
  if (context === undefined) {
    throw new Error(
      'useFinancialRecordList must be used within an FinancialRecordListContext',
    );
  }

  return context;
};

export default useFinancialRecordList;
