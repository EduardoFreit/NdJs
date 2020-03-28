const express = require('express'); //acessando o express
const mongoose = require('mongoose');

//inciando o app
const app = express();

//inciando o banco de dados
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {useNewUrlParser: true}
);//conectando Db


app.get('/', (req, res) =>{//
 //req = requisição. Todos os detalhes e informções da requisição 
// res = reposta para o usuario
    res.send('Hello Worlddd!');
});

app.listen(3001); //abrindo aplicação na porta 3001 do navegador


