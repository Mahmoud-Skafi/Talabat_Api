const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const houseschema = new Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true, trim: true },
  light: { type: Boolean, required: true },
  door: { type: Boolean, required: true },
  temp: { type: Number, required: true },
  voiceprints: { type: Array, required: true },
});

module.exports = mongoose.model('houses', houseschema);