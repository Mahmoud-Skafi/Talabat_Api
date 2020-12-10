const router = require('express').Router();
const House = require('../models/house');


//ADD HOUSES
router.post('/', async (req, res, next) => {
    try {
        const value = req.body;
        const inserted = await House.insertMany(value);
        res.json(inserted);
    } catch (error) {
        next(error);
    }
});

//GET ALL HOUSES
router.get('/', async (req, res, next) => {
    try {
        const find = await House.find({});
        res.json(find)
    } catch (error) {
        next(error);
    }
});

//GET HOUSE BY ID
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const item = await House.findOne({
            "_id": id
        })
        if (!item) return (next);
        return res.json(item);
    } catch (error) {
        next(error);
    }
});
//SET LIGHT
router.post('/:id/l/:set', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { set } = req.params;
        const item = await House.findOne({
            "_id": id
        })
        if (!item) return next();
        const update = await House.updateMany({ "light": set });
        res.json(update);
    } catch (error) {
        next(error);
    }
});
//SET DOOR
router.post('/:id/d/:set', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { set } = req.params;
        const item = await House.findOne({
            "_id": id
        })
        if (!item) return next();
        const update = await House.updateMany({ "door": set });
        res.json(update);
    } catch (error) {
        next(error);
    }
});
//SET TEMP
router.post('/:id/t/:set', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { set } = req.params;
        const item = await House.findOne({
            "_id": id
        })
        if (!item) return next();
        const update = await House.updateMany({ "temp": set });
        res.json(update);
    } catch (error) {
        next(error);
    }
});
//ADD VOICEPRINT
router.post('/:id/v', async (req, res, next) => {
    try {
        const { id } = req.params;
        const value = req.body;
        console.log(value);
        const item = await House.findOne({
            "_id": id
        })
        if (!item) return next();
        const update = await House.insertMany({ "voiceprints": value.voiceprints });
        res.json(update);
    } catch (error) {
        next(error);
    }
});
//GET VOICEPRINT
router.get('/:id/v', async (req, res, next) => {
    try {
        const { id } = req.params;
        const item = await House.findOne({
            "_id": id
        })
        if (!item) return next();
        const voice = await House.findOne({});
        // console.log(voice.voiceprints);
        res.json(voice.voiceprints);
    } catch (error) {
        next(error);
    }
});

module.exports = router;