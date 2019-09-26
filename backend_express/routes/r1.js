//import mongoose from "mongoose";
const mongoose = require("mongoose");
//import '../models/materials';
const materials = require('../models/materials.js');//../models/materials.js
const config = require('../config.json');
const Materials = mongoose.model('materials');

// установка схемы
/*const userScheme = new Schema({
  name: String,
  age: Number
});*/

// подключение
mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, { useNewUrlParser: true });

//const User = mongoose.model("User", userScheme);
const materialsDb = new Materials({
  title: "яблки",//заглавие
  description: "зеленые яблоки",//описание
  unitOfMeasurement: "шт.",//единицы измерееия
  quantity: "15"//кличество
});

materialsDb.save(function (err) {
  mongoose.disconnect();  // отключение от базы данных

  if (err) return console.log(err);
  console.log("Сохранен объект", materialsDb);
});
