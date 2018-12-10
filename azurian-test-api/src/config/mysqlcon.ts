import * as mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';
import  env  from './env_vars'
// Singleton
let connection = null;


const createConnection = async () => mysql.createConnection(env.dbConfig);


const getConnection = async () => {
    if(connection === null)
        connection = await createConnection();
    return connection;
}

export {
    getConnection
}