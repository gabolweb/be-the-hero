const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors({
  //origin: 'https://url.com.br/'
}));
app.use(express.json());

/** Rota & Recurso */
app.use(routes);


app.listen(3333);