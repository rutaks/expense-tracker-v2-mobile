import {useEffect, useState} from 'react';
import {getConnection} from '../../config/db-config';

/**
 * Hook that instanciates db connection if instance does not already exist
 */
export const useDbConnectionSetup = () => {
  const [connection, setConnection] = useState<any>();
  useEffect(() => {
    const setupConnection = async () => {
      const conn = await getConnection();
      setConnection(conn);
    };
    if (!connection) {
      setupConnection();
    }
  }, [connection]);

  return {connection};
};
