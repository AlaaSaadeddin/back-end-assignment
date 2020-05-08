const yup = require('yup');

const loginValidate = yup.object({
  username: yup.string().min(4).max(10).required(),
  password: yup.string().min(8).required(),
});

module.exports = loginValidate;
