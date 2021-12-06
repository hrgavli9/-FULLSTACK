const express = require('express')
const companyModel = require('../Model/companyModel')
const router = express.Router()
//GET PRODUCT
router.get('/', async (req, res) => {
    try {
        console.log('get api called')
        const iRes = await companyModel.find()
        res.json(iRes)
    }
    catch (error) {
        res.send('error' + error)
    }
})
//INSERT PRODUCT
router.post('/', async (req, res) => {
    const adddata = new companyModel({
        name: req.body.name,
        product_id: req.body.product_id
    });
    try {
        const iRes = await adddata.save()
        console.log('insert api called')
        res.json(iRes)
    }
    catch (error) {
        res.send('error' + error)
    }

})

//UPDATE PRODUCT
router.put('/:id', async (req, res) => {
    try {
        console.log('update api called')
        const updatedata = await companyModel.findById(req.params.id)
        updatedata.name = req.body.name,
        updatedata.product_id = req.body.product_id
        const iRes = await updatedata.save()
        res.json(iRes)
    }
    catch (error) {
        res.send('error' + error)
    }
})
//DELETE PRODUCT
router.delete('/:id', async (req, res) => {
    try {
        console.log('delete api called')
        const deldata = await companyModel.findById(req.params.id)
        const iRes = await deldata.delete()
        const msg = 'data deleted'
        res.json(msg)
        // res.json(iRes)
    }
    catch (error) {
        res.json('error' + error)
    }
})
module.exports = router