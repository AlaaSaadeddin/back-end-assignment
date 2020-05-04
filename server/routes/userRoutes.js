const router = require('express').Router();
const signUp = require('../controllers');


console.log('22222222222222222222222222222');
router.post('/signup' , signUp);


module.exports = router;
