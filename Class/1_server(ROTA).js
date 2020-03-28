const express = require('express'); //acessando o express

const app = express(); //executando o express


app.get('/', (req, res) =>{// '/' = rota raiz(nao tem nenhuma outra rota)
 //req = requisição. Todos os detalhes e informções da requisição 
// res = reposta para o usuario
    res.send('Hello World!');
});

app.listen(3001); //abrindo aplicação na porta 3001 do navegador


