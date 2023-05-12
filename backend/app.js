const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/erroe')

app.use(express.json());
module.products = require('./routes/product');

app.use('./api/v1',products)

app.use(errorMiddleware)

module.exports = app;