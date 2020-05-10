const router = require('express').Router();
const { signUp, logout, login } = require('../controllers');
const authRoute = require('../controllers/auth/authRoute');

router.post('/signup', signUp);
router.post('/login', login);
router.use(authRoute);
router.get('/logout', logout);

module.exports = router;
