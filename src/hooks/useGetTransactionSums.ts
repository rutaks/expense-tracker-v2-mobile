import {useState} from 'react';
import FinancialRecordDal from '../dal/financial-record.dal';
/**
 * Hook that handles getting balance, total income & expense from local db
 */
const useGetTransactionSums = () => {
  const [balance, setBalance] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  /**
   * Gets balance, total income & expense from local db
   */
  const getBalance = async () => {
    const totInc = await FinancialRecordDal.getTotalIncome();
    const totExp = await FinancialRecordDal.getTotalExpense();
    setBalance(totInc - totExp);
    setTotalExpense(totExp);
    setTotalIncome(totInc);
  };

  return {balance, totalExpense, totalIncome, getBalance};
};

export default useGetTransactionSums;
