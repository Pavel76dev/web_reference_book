const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tablesSchema = new Schema({
  translation: { type: String },//заглавие
  //title: { type: String },//заглавие
 // description: { type: String },//описание
 // unitOfMeasurement: { type: String },//единицы измерееия
 // quantity: { type: Number }//кличество
  //    createdAt : { type: Date }
});

module.exports = mongoose.model('tables', tablesSchema);