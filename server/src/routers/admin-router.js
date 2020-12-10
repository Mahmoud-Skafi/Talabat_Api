const router = require('express').Router();
const Admin = require('../models/admin');



//TODO :ADD admin
router.post('/', async (req, res, next) => {
    try {
        const value = req.body;
        const inserted = await Admin.insertMany(value);
        res.json(inserted);
    } catch (error) {
        next(error);
    }
});
//TODO :GET admin
router.get('/', async (req, res, next) => {
    try {
        const value = await Admin.find({});
        console.log(value);
        return res.json(value)
    } catch (error) {
        next(error);
    }
});
//TODO :GET admin BY ID
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const value = await Admin.findById({
            _id: id
        })
        res.json(value);
    } catch (error) {
        next(error);
    }
});

//TODO : DELETE A admin BY ID 
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteItem = await Admin.findByIdAndRemove({
            _id: id
        });
        if (!deleteItem) return next(error);
        return res.json({ message: ` Delete Success ${id}` });
    } catch (error) {
        next(error);
    }
});
//TODO :UPDATE admin BY ID
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const value = await req.body;
        const item = await Admin.findOne({
            _id: id
        });
        if (!item) return next(error);
        await Admin.updateOne({
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