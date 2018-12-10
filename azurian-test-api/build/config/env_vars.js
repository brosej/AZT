"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
dotenv.config();
var dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER
};
exports["default"] = {
    NODE_ENV: process.env.NODE_ENV,
    dbConfig: dbConfig
};
