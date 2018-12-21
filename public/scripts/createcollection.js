/*
require('dotenv').config();
var knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        ssl: process.env.DB_SSL
    }
})
*/
"use strict";

const express       = require('express');
const tweetsRoutes  = express.Router();

module.exports = function() {

}
