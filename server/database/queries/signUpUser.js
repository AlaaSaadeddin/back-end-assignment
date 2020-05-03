const connection = require('../connection');

const addUSer = (data) => {
    const {username , email , password} = data
   return connection.query('INSERT INTO user_info (username,email,password) VALUES ($1,$2,$3)',[username,email,password]);
}

module.exports = addUSer;
