const router = require('express').Router();
const restaurants = require('./restaurants-router');
const menu = require('./menu-router');
const coustomer = require('./coustomer-router');
const order = require('./order-router');

//just for testing
router.get('/', (req, res) => {
    res.json({
        message: `api`
    })
});
//Router's

// router.use('/admin', admin);
router.use('/res', restaurants);
router.use('/menu', menu);
router.use('/client', coustomer);
router.use('/order', order);
module.exports = router;