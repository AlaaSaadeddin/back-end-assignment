const jsonwebtoken = require('jsonwebtoken');

const userSchema = require('../../utils');
const {addUser} = require('../../database/queries/signUpUser');

const signUp = async (req , res ,next) => {

    try {
        const {username,email,password} = await userSchema.validate(req.body, {abortEarly:false});
        const newUser = await addUser(data);





    }catch(err){

        next(err);
    }
}

module.exports = signUp;