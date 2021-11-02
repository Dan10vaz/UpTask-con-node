const { request, response } = require('express');
const express = require('express');
const router = express.Router();

//Importamos el controlador 
const proyectosController = require('../controllers/proyectosController')

module.exports = function() {
    //Ruta para el home
    router.get('/', proyectosController.proyectosHome);
    router.get('/nosotros', (request, response) => {
        response.send('Nosotros');
    });
    return router;

}