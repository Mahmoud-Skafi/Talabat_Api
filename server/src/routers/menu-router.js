const router = require('express').Router();
const Menu = require('../models/menu');


// Menu.create({
//     "_id": 1,
//     "name": "skafi_restaurnt",
//     "city": "hebron",
//     "street": "tafooh",
//     "latitude": "122°05'06.24 ",
//     "longitude": "37°25'19.07",
//     "image": "../public/images/1.jpg"
// })
//TODO :ADD Menu
router.post('/', async (req, res, next) => {
    try {
        const value = req.body;
        const inserted = await Menu.insertMany(value);
        res.json(inserted);
    } catch (error) {
        next(error);
    }
});
//TODO :GET Menu
router.get('/', async (req, res, next) => {
    try {
        const value = await Menu.find({});
        console.log(value);
        return res.json(value)
    } catch (error) {
        next(error);
    }
});
//TODO :GET Menu BY ID
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const value = await Menu.findById({
            _id: id
        })
        res.json(value);
    } catch (error) {
        next(error);
    }
});
//TODO : GET All Res Menu BY ID 
router.get('/res/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const value = await Menu.find({
            res_id: id
        })
        res.json(value);
    } catch (error) {
        next(error);
    }
});

//TODO : DELETE A Menu BY ID 
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteItem = await Menu.findByIdAndRemove({
            _id: id
        });
        if (!deleteItem) return next(error);
        return res.json({ message: ` Delete Success ${id}` });
    } catch (error) {
        next(error);
    }
});
//TODO :UPDATE Menu BY ID
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const value = await req.body;
        const item = await Menu.findOne({
            _id: id
        });
        if (!item) return next(error);
        await Menu.updateOne({
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