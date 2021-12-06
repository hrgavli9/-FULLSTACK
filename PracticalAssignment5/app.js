const express = require('express')
const mongoose = require('mongoose')
 
const app = express();
app.use(express.json());

const apic = require('./Controller/apicontroller')
app.use('/api',apic)

const apiseller = require('./Controller/apiSellerController')
app.use('/apiseller',apiseller)

const cmpyapi = require('./Controller/apiCompanyController')
app.use('/cmpy',cmpyapi)

const url = 'mongodb://localhost/assapi'
mongoose.connect(url,{ useNewUrlParser :true})
const con = mongoose.connection
con.on('open',()=>{
    console.log('connected to database')
})

const port = 5044;
app.listen(port,function()
{
    console.log('port ' + port + ' is started')
})