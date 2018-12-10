import * as dotenv from 'dotenv'
dotenv.config()

const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER
};

export default {
    NODE_ENV: process.env.NODE_ENV,
    dbConfig
}