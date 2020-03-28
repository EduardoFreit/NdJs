const mongoose = require('mongoose');

const Product = mongoose.model('Product');//pegando o model prduct do mongoDb

module.exports = { //exportando um objeto com algumas funções
    async index( req, res ) {//faz uma listagem de todos os registros dentro de uma base de dados
        const products = await Product.find();//buscando todos os registros no banco de dados

        return res.json(products);//retornar em um estrutura de dados JSON
    },
    async store( req, res ) {//codigo decriação de registro no model product
        //no req tem todos os dados darquisição
        const product = await Product.create(req.body);//o corpo(body) JSON criado no Insomnia

        return res.json(product);//retorno do arquivo json com product, criado no insonia, dentro
    }
}