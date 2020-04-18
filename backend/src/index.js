const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//Permitindo que qualquer front end acesse o meu backend
app.use(cors());
//Todas as requests vem em JSON
app.use(express.json());

app.use(routes);

app.listen(3535); 