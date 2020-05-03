const yup = require('yup');

const userSchema = yup.object({
    username : yup.string().min(4).max(10).required(),
    email : yup.string().email().required(),
    password : yup.string().min(8).required()
});

module.exports = userSchema;