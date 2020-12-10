const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantschema = new Schema({
  _id: { type: Number, required: true },
  name: { type: String, min: 4, max: 40, required: true, trim: true },
  city: { type: String, required: true },
  street: { type: String, required: true },
  lat: { type: String },
  lon: { type: String },
  phone: { type: String },
  image: { type: String },
}
  , { collection: "restaurants" });
/*
{
  "_id":1,
  "name": "skafi_restaurnt",
  "city": "hebron",
  "street": "tafooh",
  "lat": "122°05'06.24 ",
  "long": "37°25'19.07",
  "phone": "059902829",
  "image":"../public/images/1.jpg"
}
*/
module.exports = mongoose.model('restaurants', restaurantschema,);