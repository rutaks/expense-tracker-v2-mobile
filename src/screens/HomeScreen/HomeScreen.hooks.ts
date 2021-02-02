import {useEffect} from 'react';
import FinancialRecordDal from '../../dal/financial-record.dal';

export const useMockData = () => {
  useEffect(() => {
    // let x = new FinancialRecord();
    // x = {
    //   ...x,
    //   amount: 1000,
    //   description: 'Food',
    //   type: FinancialRecordType.EXPENSE,
    //   occurredOn: new Date(),
    // };
    // FinancialRecordDao.create(x);

    // const asyncFunc = async () => {
    //   const res = await FinancialRecordDao.findAll();
    //   console.log('res');
    //   console.log(res);
    // };
    // asyncFunc();

    const asyncFunc = async () => {
      let res = await FinancialRecordDal.findOne(1);
      console.log('res');
      console.log(res);
    };
    asyncFunc();

    // x = {
    //   ...x,
    //   amount: 1000,
    //   description: 'Food',
    //   type: FinancialRecordType.EXPENSE,
    //   occurredOn: new Date(),
    // };
    // FinancialRecordDao.create(x);
  }, []);
};
