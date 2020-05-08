const router = require('express').Router();
const { signUp, logout, login } = require('../controllers');

router.post('/signup', signUp);
router.get('/logout', logout);
router.post('/login', login);

module.exports = router;
