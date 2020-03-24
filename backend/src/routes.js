const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/***************
 * *API ROUTES**
 **************/
routes.post('/sessions', SessionController.create); //LOGIN
routes.post('/ongs', OngController.create); //CRIAR ONG
routes.get('/ongs', OngController.index); //LISTAR ONGS
routes.post('/incidents', IncidentController.create); //CRIAR INCIDENTE
routes.get('/incidents', IncidentController.index); //LISTAR INCIDENTES
routes.delete('/incidents/:id', IncidentController.delete); //DELETAR INCIDENTE
routes.get('/profile', ProfileController.index); //PERFIL ONG

module.exports = routes;