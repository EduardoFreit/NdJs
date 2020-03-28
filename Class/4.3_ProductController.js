const mongoose = require('mongoose');

const Product = mongoose.model('Product');//pegando o model prduct do mongoDb

module.exports = { //exportando um objeto com algumas funções
    async index(req, res) {//faz uma listagem de todos os registros dentro de uma base de dados
        const products = await Product.find();//buscando todos os registros no banco de dados

        return res.json(products);//retornar em um estrutura de dados JSON
    },
}