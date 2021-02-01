import {createConnection} from 'typeorm';

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
      entities: [],
    });
    return connection;
  } catch (error) {
    console.log(error);
    return {};
  }
};
