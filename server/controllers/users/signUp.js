const {sign , verify} = require('jsonwebtoken');

const userSchema = require('../../utils');
const {addUser} = require('../../database/queries/signUpUser');

const signUp = async (req , res ,next) => {

    try {
        const {username,email,password} = await userSchema.validate(req.body, {abortEarly:false});
        const newUser = await addUser(data);

        console.log( 'data', newUser);

        console.log('user' , username);
        console.log( 'email', email);
        console.log( 'pass' , password);

    }catch(err){

        next(err);
    }
}

module.exports = signUp;