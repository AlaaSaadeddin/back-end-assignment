const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const loginUser = require('../../database/queries/loginUser');
const { loginValidate } = require('../../utils');

const login = async (req, res, next) => {
  try {
    const { username, password } = await loginValidate.validate(req.body, {
      abortEarly: false,
    });
    const data = await loginUser(username);
    if (data.rows[0]) {
      const { password: hashPassword } = data.rows[0];
      const check = await compare(password, hashPassword);

      if (check) {
        const id = data.rows[0];
        const token = sign(id, process.env.SecretKey);
        res.cookie('token', token);
        res.status(200).json({
          statusCode: 200,
          message: 'You are login now',
        });
      } else {
        res.status(400).json({
          message: 'user does not exists',
        });
      }
    }
  } catch (err) {
    if (err.errors) {
      res.status(400).json({
        message: err.errors,
      });
    }
    next(err);
  }
};

module.exports = login;
