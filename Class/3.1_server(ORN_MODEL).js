const express = require('express'); //acessando o express
const mongoose = require('mongoose');
const requireDir = require('require-dir'); //biblioteca js pra selecionar todos os arquivos de um diretorio

//inciando o app
const app = express();

//inciando o banco de dados
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {useNewUrlParser: true}
);//conectando Db

requireDir('./src/models');

const Product = mongoose.model('Product');//Criando uma var com schema product importado do js Product.js

//Primeira Rota -- rota usuario com servidor
app.get('/', (req, res) =>{//
 //req = requisição. Todos os detalhes e informções da requisição 
// res = reposta para o usuario
    Product.create({
        title: 'Reactive Native',
        descripition: 'Build Native apps with React',
        url: 'http://github.com/facebook/react-native'
    });
    
    res.send('Hello Worlddd!');
});

app.listen(3001); //abrindo aplicação na porta 3001 do navegador


