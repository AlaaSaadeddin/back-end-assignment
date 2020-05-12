const { verify } = require('jsonwebtoken');

const authRoute = (req, res, next) => {
  if (req.cookies && req.cookies.token) {
    verify(req.cookies.token, process.env.SecretKey, (err, payload) => {
      console.log('payload :>> ', payload);
      if (err) {
        res.status(401).json({
          message: 'Unauthorized',
        });
      }
    });
  } else {
    res.status(401).json({
      message: 'Please sign up or login',
    });
  }
  next();
};
module.exports = authRoute;
