const express = require('express')
const product = require('../Model/productModel')
const router = express.Router()
//GET PRODUCT
router.get('/',async(req,res)=>
{
    try 
    {
        console.log('get api called')
        const iRes = await product.find()
        res.json(iRes)
    } 
    catch (error) 
    {
        res.send('error'+error)
    }
})
//INSERT PRODUCT
router.post('/',async(req,res)=>
{
    const adddata = new product({
        title : req.body.title,
        price : req.body.price,
        company_id : req.body.company_id,
        category : req.body.category,
        seller_id : req.body.seller_id
    });
    try 
    {
        console.log('insert api called')
        const iRes = await adddata.save()
        res.json(iRes)    
    } 
    catch (error) 
    {
        res.send('error'+error)   
    }
   
})

//UPDATE PRODUCT
router.put('/:id',async(req,res)=>
{
    try 
    {
        console.log('update api called')
        const updatedata = await product.findById(req.params.id)
        updatedata.title = req.body.title,
        updatedata.price = req.body.price,
        updatedata.company_id = req.body.company_id,
        updatedata.seller_id = req.body.seller_id,
        updatedata.category = req.body.category
        const iRes = await updatedata.save()
        res.json(iRes)
    } 
    catch (error) 
    {
        res.send('error'+error)
    }
})
//DELETE PRODUCT
router.delete('/:id',async(req,res) =>
{
    try 
    {
        console.log('delete api called')
        const deldata = await product.findById(req.params.id)
        const iRes = await deldata.delete()
        const msg = 'data deleted'
        res.json(msg)
        // res.json(iRes)
    } 
    catch (error) 
    {
        res.json('error'+error)
    }
})
module.exports = router