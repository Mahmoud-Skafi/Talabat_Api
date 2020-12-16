const router = require('express').Router();
const Coustomer = require('../models/customer');
const jwt = require('jsonwebtoken');
const { verifyToken } = require('../middlewares');


//TODO :ADD COUSTOMER
router.post('/', async (req, res, next) => {
    try {
        const value = req.body;
        const inserted = await Coustomer.insertMany(value);
        res.json(inserted);
    } catch (error) {
        next(error);
    }
});
//TODO :GET COUSTOMER
router.get('/', async (req, res, next) => {
    try {
        const value = await Coustomer.find({});
        console.log(value);
        return res.json(value)
    } catch (error) {
        next(error);
    }
});
//TODO :GET COUSTOMER BY ID
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

//TODO : DELETE A COUSTOMER BY ID 
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
//TODO :UPDATE COUSTOMER BY ID
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
//TODO :CREATE NEW ADMIN USER
router.post('/register', async (req, res, next) => {
    try {
        let value = await req.body;
        let userData = new Coustomer(value);
        userData.save((errr, registerData) => {
            if (errr) next(errr);
            else {

                res.status(201).send(registerData);
            }
        })

    } catch (error) {
        next(error);
    }
});
//TODO :LOGIN 
router.post('/login', async (req, res, next) => {

    try {
        let value = await req.body;
        console.log(value);
        Coustomer.findOne({ email: value.email }, (err, user) => {
            if (err) next(err);
            else {
                if (!user) res.status(401).send('Invalid email')
                else {
                    if (user.password !== value.password) res.status(401).send('Invalid password');
                    else {
                        let payload = { subject: user._id };
                        let token = jwt.sign(payload, 'skafips')
                        res.status(200).send({ token });
                    }
                }
            }

        })
    } catch (error) {
        next(error);
    }
});

module.exports = router;