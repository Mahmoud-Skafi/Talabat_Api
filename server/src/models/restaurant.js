const { Double } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantschema = new Schema({
  _id: { type: Number, index: true, auto: true },
  name: { type: String, min: 4, max: 40, required: true, trim: true },
  city: { type: String, required: true },
  desc: { type: String, trim: true },
  street: { type: String, required: true },
  lat: { type: String },
  long: { type: String },
  phone: { type: String },
  image: { type: String, required: true },
  rating: { type: Number, required: true, max: 10 }
}
  , { collection: "restaurants" });
/*
{
  "_id":1,
  "name": "skafi_restaurnt",
  "city": "hebron",
  "desc":`Achieve the maximum speed possible on the Web Platform today, and take it further, via Web
    Workers and server-side rendering. Angular puts you in control over scalability. Meet huge
    data requirements by building data models on RxJS, Immutable.js or another push-model.`,
  "street": "tafooh",
  "lat": "122°05'06.24 ",
  "long": "37°25'19.07",
  "phone": "059902829",
  "image":"../public/images/1.jpg",
  "rating":9
}
*/
module.exports = mongoose.model('restaurants', restaurantschema,);