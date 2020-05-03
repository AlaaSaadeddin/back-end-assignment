const express = require('express');
const cookie_parser = require('cookie-parser');

const app = express();

app.disable('x-powered-by');
app.use(express.urlencoded({extended : false}));
app.use(cookie_parser);

module.exports = app;
