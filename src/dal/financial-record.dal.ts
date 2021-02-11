import {getRepository} from 'typeorm/browser';
import FinancialRecordType from '../enums/financial-record-type.enum';
import FinancialRecord from '../models/financial-record.model';
import {sortByDueDate} from '../utils/date.util';

/**
 * Class representing Farmer dabase access layer
 */
class FinancialRecordDal {
  /**
   * Finds all FinancialRecords in db
   */
  static async findAll(): Promise<FinancialRecord[]> {
    const repo = getRepository(FinancialRecord);
    const res = await repo.find({});
    return sortByDueDate(res);
  }

  /**
   * Finds FinancialRecord in db by id
   * @param id FinancialRecord's id
   */
  static async findOne(id: number): Promise<FinancialRecord> {
    const repo = getRepository(FinancialRecord);
    return await repo.findOne({where: {id}});
  }

  /**
   * Save FinancialRecord in db
   * @param FinancialRecord
   */
  static async create(
    financialRecord: FinancialRecord,
  ): Promise<FinancialRecord> {
    const repo = getRepository(FinancialRecord);
    return await repo.save(financialRecord);
  }

  /**
   * Save FinancialRecord in db
   * @param FinancialRecord
   */
  static async modify(
    id: number,
    financialRecord: FinancialRecord,
  ): Promise<FinancialRecord> {
    const repo = getRepository(FinancialRecord);
    let foundRecord = await repo.findOne(id);
    foundRecord = {...foundRecord, ...financialRecord};
    return await repo.save(foundRecord);
  }

  /**
   * Removes FinancialRecord from db by id
   * @param id
   */
  static async remove(id: number): Promise<any> {
    const repo = getRepository(FinancialRecord);
    const {affected} = await repo.delete({id});
    return affected;
  }

  /**
   * Removes FinancialRecords from db
   */
  static async removeAll(): Promise<any> {
    const repo = getRepository(FinancialRecord);
    const {affected} = await repo.delete({});
    return affected;
  }

  /**
   * Queries the sum of all incomes recorded
   */
  static async getTotalIncome(): Promise<number> {
    const repo = getRepository(FinancialRecord);
    const {sum}: {sum: number} = await repo
      .createQueryBuilder('record')
      .select('SUM(record.amount)', 'sum')
      .where('record.type = :type', {type: FinancialRecordType.INCOME})
      .getRawOne();

    return sum;
  }

  /**
   * Queries the sum of all expenses recorded
   */
  static async getTotalExpense(): Promise<number> {
    const repo = getRepository(FinancialRecord);
    const {sum} = await repo
      .createQueryBuilder('record')
      .select('SUM(record.amount)', 'sum')
      .where('record.type = :type', {type: FinancialRecordType.EXPENSE})
      .getRawOne();
    return sum;
  }

  /**
   * Makes the difference of all incomes and expenses recorded
   */
  static async getBalance(): Promise<number> {
    return (await this.getTotalIncome()) - (await this.getTotalExpense());
  }
}

export default FinancialRecordDal;
