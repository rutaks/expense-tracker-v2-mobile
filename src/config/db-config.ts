import {createConnection} from 'typeorm/browser';
import FinancialRecord from '../models/financial-record.model';

/**
 * Sets up connection with local database
 */
export const getConnection = async (): Promise<any> => {
  try {
    const connection = await createConnection({
      type: 'react-native',
      database: 'wove',
      location: 'default',
      logging: ['error', 'query', 'schema'],
      synchronize: true,
      entities: [FinancialRecord],
    });
    return connection;
  } catch (error) {
    console.log(error);
    return {};
  }
};
