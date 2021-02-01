import FinancialRecordType from '../enums/financial-record-type.enum';

export default interface FinancialRecord {
  id?: number;

  description: string;

  amount: number;

  type: FinancialRecordType;
}
