
// const router = require('express').Router();

// const House = require('../models/house');

// router.get('/control', async (req, res) => {
//     await House.findOne({}).then(doc => {
//         res.send(doc);
//     })
// });
// router.get('/', (req, res) => {
//     res.json({
//         message: "admin"
//     })
// });
// //ROUTE TO CHANGE LIGHT VALUE
// router.post('/control/light/:set', async (req, res, next) => {
//     // let value;
//     // await House.find({}, function (err, result) {
//     //     if (err) {
//     //         res.send(err);
//     //     } else {
//     //         value = result[0].light;
//     //     }
//     // });
//     //value=!value;
//     let value = req.params;
//     // console.log(value.set);
//     try {
//         await House.updateOne({ "light": value.set }, function (
//             err,
//             result
//         ) {
//             if (err) {
//                 res.send(err);
//             } else {
//                 res.json(result);
//             }
//         });
//         res.status(201).send();
//     } catch (errro) {
//         next(errro);
//     }
// });

// //ROUTE TO CHANGE LIGHT VALUE
// router.post('/control/door/:set', async (req, res, next) => {
//     // let value;
//     // await House.find({}, function (err, result) {
//     //     if (err) {
//     //         res.send(err);
//     //     } else {
//     //         value = result[0].door;
//     //     }
//     // });
//     //value=!value;
//     let value = req.params;
//     // console.log(value.set);
//     try {
//         await House.updateOne({ "door": value.set }, function (
//             err,
//             result
//         ) {
//             if (err) {
//                 res.send(err);
//             } else {
//                 res.json(result);
//             }
//         });
//         res.status(201).send();
//     } catch (errro) {
//         next(errro);
//     }
// });
// //ROUTE TO CHANGE LIGHT VALUE
// router.post('/control/temp/:set', async (req, res, next) => {
//     // let value;
//     // await House.find({}, function (err, result) {
//     //     if (err) {
//     //         res.send(err);
//     //     } else {
//     //         value = result[0].temp;
//     //     }
//     // });
//     //value=!value;
//     let value = req.params;
//     console.log(value.set);
//     try {
//         await House.updateOne({ "temp": value.set }, function (
//             err,
//             result
//         ) {
//             if (err) {
//                 res.send(err);
//             } else {
//                 res.json(result);
//             }
//         });
//         res.status(201).send();
//     } catch (errro) {
//         next(errro);
//     }
// });

// router.put('/add/voice', async (req, res, next) => {
//     try {
//         let prvValue;
//         await House.find({}, function (err, result) {
//             if (err) {
//                 res.send(err);
//             } else {
//                 prvValue = result[0].voiceprints;
//             }
//         });
//         // console.log(prvValue)
//         let value = req.body;
//         value = value;
//         value = value + ',' + prvValue;
//         await House.updateOne({ "voiceprints": value }, function (err, result) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(result);
//             }
//         });
//         res.status(201).send();

//     } catch (errro) {
//         next(errro);
//     }
// });
// //ADD HOUSE 
// router.post('/add', async (req, res, next) => {
//     try {
//         const value = {
//             "name": "house1",
//             "light": false,
//             "door": false,
//             "temp": 56,
//             "voiceprints": ["12 21 5 15 2 121 21 1 ", "4 5 545 8 2  8 "],
//         }
//         await House.insertMany(value, function (err, result) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(result);
//             }
//         });
//         res.status(201).send();

//     } catch (errro) {
//         next(errro);
//     }
// });
// module.exports = router;
