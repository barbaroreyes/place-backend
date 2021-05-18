const  mongoose = require('mongoose');
const Schema = mongoose.Schema
const model = mongoose.model

const placeSchema = new Schema ({
  name: String,
  img: String,
  description: String
},
{timestamps:true}
);

const Place = model('Place',placeSchema)
module.exports = Place
