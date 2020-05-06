const {Pool} = require('pg');
require('dotenv').config();

let dbUrl ;
if(process.env.NODE_ENV === 'development'){
dburl = process.env.DB_URL;
} else{
    throw new Error('No Database URL');
}

const options = {
    connectionString : dbUrl,
    ssl: {
        rejectUnauthorized: false,
      },
}
module.exports = new Pool(options);
