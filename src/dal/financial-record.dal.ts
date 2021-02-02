import {getRepository} from 'typeorm/browser';
import FinancialRecord from '../models/financial-record.model';

/**
 * Class representing Farmer dabase access layer
 */
class FinancialRecordDal {
  /**
   * Finds all FinancialRecords in db
   */
  static async findAll(): Promise<FinancialRecord[]> {
    const repo = getRepository(FinancialRecord);
    return await repo.find({});
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
  static async removeFinancialRecords(): Promise<any> {
    const repo = getRepository(FinancialRecord);
    const {affected} = await repo.delete({});
    return affected;
  }
}

export default FinancialRecordDal;
