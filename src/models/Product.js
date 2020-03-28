//schema: quais campos que os produtos teme quais o seus tippos
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');//importando o mongoose paginate

const productSchema = new mongoose.Schema({
    title:{
        type: String, //pode ser todos tipos de variaveis
        required: true, //obrigatirio(t ou F)
    },
    descripition:{
        type: String,
        required: true,
    },
    url:{
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, //valor ja setado da data atual
    }
});

productSchema.plugin(mongoosePaginate);

mongoose.model('Product', productSchema); //codigo para resgistrar o model na aplicação