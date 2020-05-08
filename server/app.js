const express = require('express');
const cookieParser = require('cookie-parser');

const router = require('../server/routes/userRoutes');
const serverError = require('../server/controllers/handleError/error');

const app = express();

app.disable('x-powered-by');
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

app.use('/api/' , router)
app.use(serverError);

module.exports = app;
