const express = require('express')
const sellerModel = require('../Model/sellerModel')
const router = express.Router()
//GET PRODUCT
router.get('/',async(req,res)=>
{
    try 
    {
        console.log('get api called')
        const iRes = await sellerModel.find()
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
    const adddata = new sellerModel({
        seller_name : req.body.seller_name,
        seller_product_id : req.body.seller_product_id  
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
        const updatedata = await sellerModel.findById(req.params.id)
        updatedata.seller_name = req.body.seller_name,
        updatedata.seller_product_id = req.body.seller_product_id
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
        const deldata = await sellerModel.findById(req.params.id)
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