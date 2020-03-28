const express = require('express'); //acessando o express
const mongoose = require('mongoose');
const requireDir = require('require-dir'); //biblioteca js pra selecionar todos os arquivos de um diretorio
const cors = require('cors');
//inciando o app
const app = express();
app.use(express.json()); //permitir q envie dados para aplicação no formato de JSON
app.use(cors());//pode passar parametros para permitir dominos especificos, algumas configrações de segurança
//inciando o banco de dados
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {useNewUrlParser: true}
);//conectando Db

requireDir('./src/models'); //adicionando repositoriio para expeortar as models/schema

const Product = mongoose.model('Product');//Criando uma var com schema product importado do js Product.js

//Primeira Rota -- rota usuario com servidor
app.use('/api', require('./src/routes'));//'use' é um coringa, recebe todo tipo de requisições
//toda vez que receber uma requisição da rota api(se não usar o prefixo, vai direto na raiz), vai madar para o arquivo src/routes

app.listen(3001); //abrindo aplicação na porta 3001 do navegador
