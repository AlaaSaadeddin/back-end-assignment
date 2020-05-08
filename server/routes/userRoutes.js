const router = require('express').Router();
const {signUp , logout} = require('../controllers');


router.post('/signup' , signUp);
router.get('/logout' , logout);


module.exports = router;
