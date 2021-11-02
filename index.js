const { request, response } = require('express');
const express = require('express');
const routes = require('./routes');
//Crear una aplicacion de express
const app = express();

app.use('/', routes());

//Decirle en que puerto va a correr 
app.listen(3000);