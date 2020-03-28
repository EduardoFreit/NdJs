const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController'); 

routes.get('/products', ProductController.index); //rota para pegar algo do banco de dados
routes.post('/products', ProductController.store);// rota para criar alguma coisa, no caso, um novo registro

   module.exports = routes;