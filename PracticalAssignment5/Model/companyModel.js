const mongoose = require('mongoose')
const companyModel = new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    product_id:
    [{
        type:String,
        required:true
    }]
})

module.exports = mongoose.model('companyModel',companyModel)