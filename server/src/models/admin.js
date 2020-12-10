const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminschema = new Schema({
    _id: { type: Number, required: true },
    user_name: { type: String, min: 4, max: 25, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, required: true, trim: true },

},
    {
        collection: 'admins'
    }
);
/*
{
  "_id":1,
  "user_name": "mahmoud",
  "email": "mahomoudskafi@gmail.com",
  "password": "05995484",
  "role":"admin"

}
*/
module.exports = mongoose.model('admins', adminschema);