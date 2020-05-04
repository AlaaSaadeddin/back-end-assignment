// const {sign , verify} = require('jsonwebtoken');

const userSchema = require('../../utils');
const {addUser} = require('../../database/queries/signUpUser');

console.log('33333333333333333333333333333333333333333333');
const signUp = async (req , res ,next) => {

    console.log('111111111111111111111111111');

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
