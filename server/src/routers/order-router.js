const router = require('express').Router();
const Order = require('../models/order');



//TODO :ADD order
router.post('/', async (req, res, next) => {
    try {
        const value = req.body;
        const inserted = await Order.insertMany(value);
        res.json(inserted);
    } catch (error) {
        next(error);
    }
});
//TODO :GET order
router.get('/', async (req, res, next) => {
    try {
        const value = await Order.find({});
        console.log(value);
        return res.json(value)
    } catch (error) {
        next(error);
    }
});
//TODO :GET order BY ID
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const value = await Order.findById({
            _id: id
        })
        res.json(value);
    } catch (error) {
        next(error);
    }
});

//TODO : DELETE A order BY ID 
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteItem = await Order.findByIdAndRemove({
            _id: id
        });
        if (!deleteItem) return next(error);
        return res.json({ message: ` Delete Success ${id}` });
    } catch (error) {
        next(error);
    }
});
//TODO :UPDATE order BY ID
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const value = await req.body;
        const item = await Order.findOne({
            _id: id
        });
        if (!item) return next(error);
        await Order.updateOne({
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