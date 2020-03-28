const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController'); 

routes.get('/products/', ProductController.index); //rota para pegar algo do banco de dados
routes.get('/products/:id', ProductController.show);//rota para mostrar um registro especifico no banco de dados
routes.post('/products', ProductController.store);// rota para criar alguma coisa, no caso, um novo registro
routes.put('/products/:id', ProductController.update); // rota para atualização de algum registro por algum parametro(s), no caso, pelo id
routes.delete('/products/:id', ProductController.destroy); //rota para deletar algum registro do bd por um parametro, no caso o 'id'

module.exports = routes;