const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coustomerchema = new Schema({
    _id: { type: Number, required: true },
    first_name: { type: String, min: 4, max: 25, required: true, trim: true },
    last_name: { type: String, min: 4, max: 25, required: true, trim: true },
    phone: { type: String, required: true, trim: true },

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
  "phone": "05995484"
}
*/
module.exports = mongoose.model('coustomers', coustomerchema);