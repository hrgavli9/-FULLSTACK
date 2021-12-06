const mongoose = require('mongoose')

const sellerModel = new mongoose.Schema({
    seller_name:
    {
        type:String,
        required:true
    },
    seller_product_id:
    [{
        type:String,
        required:true
    }]
})

module.exports = mongoose.model('sellerModel',sellerModel)