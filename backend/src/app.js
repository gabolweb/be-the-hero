const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const {errors} = require('celebrate');

const app = express();

app.use(cors({
  //origin: 'https://url.com.br/'
}));
app.use(express.json());

/** Rota & Recurso */
app.use(routes);

/** Tratamento de erros */
app.use(errors());

module.exports = app;