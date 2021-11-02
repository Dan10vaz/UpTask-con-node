const { request, response } = require('express');
const express = require('express');
const routes = require('./routes');
const path = require('path');

//Crear una aplicacion de express
const app = express();

//Habilitar pug
app.set('view engine', 'pug')
    //Añadir la carpeta de las vistas 
app.set('views', path.join(__dirname, './views'));

app.use('/', routes());

//Decirle en que puerto va a correr 
app.listen(3000);