const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coustomerchema = new Schema({
    _id: { type: Number, unique: true },
    first_name: { type: String, min: 4, max: 25, required: true, trim: true },
    last_name: { type: String, min: 4, max: 25, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },

},
    {
        collection: 'coustomers'
    }
);
/*
{
  "_id":1,
  "first_name": "mahmoud",
  "last_name": "skafi",
  "email":"mad@mad.com",
  "password":"05995484",
  "phone": "05995484",
  "role":"customer"
}
*/
module.exports = mongoose.model('coustomers', coustomerchema);