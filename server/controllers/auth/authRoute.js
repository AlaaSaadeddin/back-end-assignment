const { verify } = require('jsonwebtoken');

const authRoute = async (req, res, next) => {
  try {
    if (req.cookies && req.cookies.token) {
      await verify(req.cookies.token, process.env.SecretKey);
    } else {
      res.status(401).json({
        message: 'Please sign up or login',
      });
    }
  } catch (err) {
    if (err) {
      res.status(401).json({
        message: 'Unauthorized',
      });
    }
  }
  next();
};

module.exports = authRoute;
