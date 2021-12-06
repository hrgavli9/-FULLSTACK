const mongoose = require('mongoose')
const productModel = new mongoose.Schema({
    title:
    {
        type:String,
        required:true
    },
    price:
    {
        type:String,
        required:true
    },
    category:
    [{
        type:String,
        required:true
    }],
    company_id:
    {
        type:String,
        required:true
    },
    seller_id:
    [{
        type:String,
        required:true
    }]
})

module.exports = mongoose.model('productModel',productModel)