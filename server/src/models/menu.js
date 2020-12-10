const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuschema = new Schema({
    _id: { type: Number, required: true },
    res_id: { type: Number, required: true },
    name: { type: String, min: 4, max: 50, required: true, trim: true },
    descr: { type: String },
    price: { type: Number, required: true },
    image: { type: String },
},
    {
        collection: 'menus'
    }
);
/*
{
  "_id":1,
  "res_id":1,
  "name": "skafi_restaurnt",
  "descr": "description for the menu",
  "price": 15,
  "image":"../public/images/1.jpg"
}
*/
module.exports = mongoose.model('menus', menuschema);