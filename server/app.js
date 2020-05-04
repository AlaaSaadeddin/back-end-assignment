const express = require('express');
const cookie_parser = require('cookie-parser');

const router = require('../server/routes/userRoutes');
const serverError = require('../server/controllers/handleError/error');

const app = express();

app.disable('x-powered-by');
app.use(express.urlencoded({extended : false}));
app.use(cookie_parser);

app.use('/api/' , router)
app.use(serverError);

module.exports = app;

