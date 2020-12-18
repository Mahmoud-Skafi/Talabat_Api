const router = require('express').Router();
const { verifyToken } = require('../middlewares');
const Restaurant = require('../models/restaurant');



//TODO :ADD RESTAURANT
router.post('/', async (req, res, next) => {
    try {
        const value = req.body;
        const inserted = await Restaurant.insertMany(value);
        res.json(inserted);
    } catch (error) {
        next(error);
    }
});
//TODO :GET RESTAURANT
router.get('/', async (req, res, next) => {
    try {
        const value = await Restaurant.find({});
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
        const value = await Restaurant.findById({
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
        const deleteItem = await Restaurant.findByIdAndRemove({
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
        const item = await Restaurant.findOne({
            _id: id
        });
        if (!item) return next(error);
        await Restaurant.updateOne({
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