const mongoose = require('mongoose');

const Product = mongoose.model('Product');//pegando o model prduct do mongoDb

module.exports = { //exportando um objeto com algumas funções
    //criando o corpo das funçoes das rotas
    async index( req, res ) {//faz uma listagem de todos os registros dentro de uma base de dados
        const { page = 1 } = req.query;//pegando a page q o usario que acessar. 
        //usando desestuturação        //É realizado pelo query(uma especie de filtro. No caso, estabelece o valor da pagina requisitada.)
        //co valor padrao pag. 1       //tudo depois de uma url que possui =? eh uma requisição query(usado para filtrar/mosrar resultados especificos)    
        //const products = await Product.find();
        const products = await Product.paginate({}, { page, limit:5});//buscando todos os registros no banco de dados
        //const products = await Product.findById(id);
        //paginate(importada em Product.js): {}-algum filtro(vazio, retonar todos os registros),
        //{page:1 limit:10}: pagina atual(a 1ª), e quantidade de itens por pagina(10)
        //{page, } short sintax = page:page
        return res.json(products);//retornar em um estrutura de dados JSON
    },
    async show(req, res){//detalhar algum registro especifico
       
        const product = await Product.findById(req.params.id);//selecionando o produto a partir do id
        
        return res.json(product);//retornar o arquivo json q foi criado
    },
    async store(req, res) {//codigo decriação de registro no model product
        //no req tem todos os dados darquisição
        const product = await Product.create(req.body);//o corpo(body) JSON criado no Insomnia

        return res.json(product);//retorno do arquivo json com product, criado no insonia, dentro
    },
    async update(req, res){
        //selecionando um registro pelo seu id, e atualizando por aquilo q foi escrito no JSON do isnominia(post)
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }); //
        //{new: true} = para o mongoose retorne o produto atualizado(req.body) para a variavel product
        // se nao tiver o objeto com a variavel new, retorna o produto antes de atulizar os novos dados, ou seja, permanece o antigo
        return res.json(product); 
    },
    async destroy(req, res){
        const product = await Product.findByIdAndRemove(req.params.id); //remover um registro do banco de dados por algum parametro, no caso o id

        return res.send();//retorna apenas uma resposta se a remoção foi realizado com sucesso. Resposta de sucesso = 200
    },
}