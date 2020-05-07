const { Pool } = require('pg');
require('dotenv').config();

let dbUrl;

switch (process.env.NODE_ENV) {
  case 'development':
    dbUrl = process.env.DB_URL;
    break;
  case 'production':
    throw new Error('No Database URL!!!');
    break;
  case 'test':
    throw new Error('No Database URL!!!');
    break;
  default:
    throw new Error('No Database URL!!!');
}

const options = {
  connectionString: dbUrl,
  ssl: true,
};
module.exports = new Pool(options);
