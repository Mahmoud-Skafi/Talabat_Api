const router = require('express').Router();
const Coustomer = require('../models/customer');



//TODO :ADD RESTAURANT
router.post('/', async (req, res, next) => {
    try {
        const value = req.body;
        const inserted = await Coustomer.insertMany(value);
        res.json(inserted);
    } catch (error) {
        next(error);
    }
});
//TODO :GET RESTAURANT
router.get('/', async (req, res, next) => {
    try {
        const value = await Coustomer.find({});
        console.log(value);
        return res.json(value)
    } catch (error) {
        next(error);
    }
});
//TODO :GET RESTAURANT BY ID
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const value = await Coustomer.findById({
            _id: id
        })
        res.json(value);
    } catch (error) {
        next(error);
    }
});

//TODO : DELETE A RESTAURANT BY ID 
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteItem = await Coustomer.findByIdAndRemove({
            _id: id
        });
        if (!deleteItem) return next(error);
        return res.json({ message: ` Delete Success ${id}` });
    } catch (error) {
        next(error);
    }
});
//TODO :UPDATE RESTAURANT BY ID
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const value = await req.body;
        const item = await Coustomer.findOne({
            _id: id
        });
        if (!item) return next(error);
        await Coustomer.updateOne({
            _id: id
        }, {
            $set: value
        });
        res.json(value);
    } catch (error) {
        next(error);
    }
});

module.exports = router;