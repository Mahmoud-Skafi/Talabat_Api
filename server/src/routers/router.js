const router = require('express').Router(),
    admin = require('./admin-router');
house = require('./house-router');

//just for testing
router.get('/', (req, res) => {
    res.json({
        message: `
        /house get request return house information as json
        /house post requst create new house 
        /house/:id/l/[boolen] post requst change light status[on,off] 
        /house/:id/d/[boolen] post requst change door status[on,off] 
        /house/:id/t/[number] post requst change door status[1,2,3...etc] 
        /house/:id/v get requst return voiceprints 
        /house/:id/v post requst add new voiceprint 
        `
    })
});
//Router's

// router.use('/admin', admin);
router.use('/house', house);
module.exports = router;