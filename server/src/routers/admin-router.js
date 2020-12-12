const router = require('express').Router();
const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');
const { verifyToken } = require('../middlewares');


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
//TODO :CREATE NEW ADMIN USER
router.post('/register', async (req, res, next) => {
    try {
        let value = await req.body;
        // Admin.findOne({ email: value.email }, (err, user) => {
        //     console.log(user)
        //     if (err) {
        //         // next(err);
        //     }
        //     if (user) res.status(401).send('Invalid email');
        // })
        let userData = new Admin(value);
        userData.save((errr, registerData) => {
            if (errr) next(errr);
            else {
                // let payload = { subject: registerData._id };
                // let token = jwt.sign(payload, 'skafips')
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
        Admin.findOne({ user_name: value.user_name }, (err, user) => {
            if (err) next(err);
            else {
                if (!user) res.status(401).send('Invalid user name')
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