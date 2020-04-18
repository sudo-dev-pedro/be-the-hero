const express = require('express');
const routes = express.Router();

const ongControl = require('./controllers/OngControl');
const casoControl = require('./controllers/CasoControl');
const perfilControl = require('./controllers/PerfilControl');
const sessionControl = require('./controllers/SessionControl');

//Login
routes.post('/session', sessionControl.login);

//Cadastrar ONG
routes.post('/ongs', ongControl.insert);
//Listar ONGS
routes.get('/ongs', ongControl.listAll);

//Cadastrar casos
routes.post('/casos', casoControl.insert);
//Listar casos. OBS: Possui um request.query para a paginação
routes.get('/casos', casoControl.listAll);
//Deletar casos
routes.delete('/casos/:id', casoControl.delete);

//Listar casos por ONG
routes.get('/perfil', perfilControl.listCasesForONG);


module.exports = routes;