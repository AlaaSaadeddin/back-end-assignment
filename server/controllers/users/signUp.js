const { sign } = require('jsonwebtoken');
const { genSalt, hash } = require('bcrypt');

const userSchema = require('../../utils');
const addUser = require('../../database/queries/signUpUser');

const signUp = async (req, res, next) => {
  try {
    const { username, email, password } = await userSchema.validate(req.body, {
      abortEarly: false,
    });

    const salt = await genSalt(10);
    const hashed = await hash(password, salt);
    console.log('hash :>> ', hashed);
    const newUser = await addUser({ username, email, password: hashed });
    const id = newUser.rows[0];
    console.log('id :>> ', id);
    const token = sign(id, process.env.SecretKey);
    console.log('object :>> ', process.env.SecretKey);
    res.cookie('token', token).status(200).json({
      statusCode: '200',
      message: 'welcome to Home Page',
    });
    console.log('token :>> ', token);
  } catch (err) {
    if (err.detail) {
      res.status(400).json({
        message: err.detail,
      });
    } else if (err.errors) {
      res.status(400).json({
        message: err.errors,
      });
    }
    next(err);
  }
};

module.exports = signUp;
