const express = require('express')
const app = express()
const productdata = require('./producttable')
const companydata = require('./comapnytable')
const sellerdata = require('./sellertable')
app.use(express.json())

const port = 5044;
app.listen(port,function()
{
    console.log('port ' + port + ' is started')
})

//================================================
//PRODUCT
//================================================
//GET PRODUCT DATA
app.get('/product',async(req,res)=>{
    // res.send('product get called')
    res.json(productdata)
    console.log("product get called")
})

//INSERT PRODUCT DATA
app.post('/product',async(req,res)=>{
    // res.send('product post called')
    const adddata = {
        pid:productdata.length +1,
        title:req.body.title,
        price:req.body.price,
        category:req.body.category,
        company_id:req.body.company_id,
        seller_id:req.body.seller_id
    }
    try 
    {
        productdata.push(adddata)
        res.json(adddata)
    } 
    catch (error) 
    {
        res.send("error"+error)
    }
    console.log("product post called")
})

//UPDATE PRODUCT DATA
app.put('/product/:id',async(req,res)=>{
    // res.send('product put called')

    try 
    {
        const updatedata = await productdata.find(c=>c.pid = req.params.id)
        updatedata.title = req.body.title,
        updatedata.price = req.body.price,
        updatedata.company_id = req.body.company_id,
        updatedata.seller_id = req.body.seller_id,
        updatedata.category = req.body.category
        productdata.push(updatedata)
        res.json(updatedata)
    } 
    catch (error) 
    {
        res.send("error"+error)
    }
    console.log("product put called")
})

//DELETE PRODUCT DATA
app.delete('/product/:id',async(req,res)=>{
    // res.send('product delete called')
    try 
    {
        console.log('delete api called')
        const deldata = await productdata.find(c => c.pid = req.params.id)
        const index = productdata.indexOf(deldata)
        productdata.slice(index,1)
        const msg = 'data deleted'
        res.json(msg)
        // res.json(iRes)
    } 
    catch (error) 
    {
        res.json('error'+error)
    }
    console.log("product delete called")
})

//================================================
//COMPANY
//================================================
//GET COMPANY DATA
app.get('/company',async(req,res)=>{
    res.json(companydata)
    console.log("product get called")
})

//INSERT COMPANY DATA
app.post('/company',async(req,res)=>{
    const adddata = {
        id:companydata.length +1,
        name:req.body.name,
        product_id:req.body.product_id
    }
    try 
    {
        companydata.push(adddata)
        res.json(adddata)
    } 
    catch (error) 
    {
        res.send("error"+error)
    }
    console.log("product post called")
})

//UPDATE COMPANY DATA
app.put('/company/:id',async(req,res)=>{
    try 
    {
        const updatedata = await companydata.find(c=>c.id = req.params.id)
        updatedata.name = req.body.name,
        updatedata.product_id = req.body.product_id
        companydata.push(updatedata)
        res.json(updatedata)
    } 
    catch (error) 
    {
        res.send("error"+error)
    }
    console.log("product put called")
})

//DELETE COMPANY DATA
app.delete('/company/:id',async(req,res)=>{
    try 
    {
        console.log('delete api called')
        const deldata = await companydata.find(c => c.id = req.params.id)
        const index = companydata.indexOf(deldata)
        companydata.slice(index,1)
        const msg = 'data deleted'
        res.json(msg)
        // res.json(iRes)
    } 
    catch (error) 
    {
        res.json('error'+error)
    }
    console.log("product delete called")
})

//================================================
//SELLER
//================================================
//GET SELLER DATA
app.get('/seller',async(req,res)=>{
    console.log("seller get called")

    res.json(sellerdata)
})

//INSERT SELLER DATA
app.post('/seller',async(req,res)=>{
    const adddata = {
        id:sellerdata.length +1,
        name:req.body.name,
        product_id:req.body.product_id
    }
    try 
    {
        sellerdata.push(adddata)
        res.json(adddata)
    } 
    catch (error) 
    {
        res.send("error"+error)
    }
    console.log("product post called")
})

//UPDATE SELLER DATA
app.put('/seller/:id',async(req,res)=>{
    try 
    {
        const updatedata = await sellerdata.find(c=>c.id = req.params.id)
        updatedata.name = req.body.name,
        updatedata.product_id = req.body.product_id
        sellerdata.push(updatedata)
        res.json(updatedata)
    } 
    catch (error) 
    {
        res.send("error"+error)
    }
    console.log("product put called")
})

//DELETE SELLER DATA
app.delete('/seller/:id',async(req,res)=>{
    try 
    {
        console.log('delete api called')
        const deldata = await sellerdata.find(c => c.id = req.params.id)
        const index = sellerdata.indexOf(deldata)
        sellerdata.slice(index,1)
        const msg = 'data deleted'
        res.json(msg)
        // res.json(iRes)
    } 
    catch (error) 
    {
        res.json('error'+error)
    }
    console.log("product delete called")
})