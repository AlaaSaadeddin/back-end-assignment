const connection = require('../connection');

const loginUser = (username) => {
  return connection.query('SELECT * FROM user_info WHERE username = $1', [
    username,
  ]);
};
module.exports = loginUser;
