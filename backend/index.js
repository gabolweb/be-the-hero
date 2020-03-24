const express = require('express');

const app = express();

app.get('/', (request, response)=>{
  return response.json( {
    evento : 'semana oministack 11.0',
    aluno : 'Gabriel'
  });
});

app.listen(3333);