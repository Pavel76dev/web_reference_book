const mongoose = require("mongoose");
const tables = require('../models/materials.js');//../models/materials.js
const config = require('../config.json');
const Materials = mongoose.model('tables');

mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, { useNewUrlParser: true });

exports.add = function (data) {
	return new Materials(data).save()
}

exports.removeOne = function (id) {
	return Materials.findOneAndRemove(id)
}

exports.findOne = function (id) {
	return Materials.findOne(id)
}

exports.find = function () {
	return Materials.find()
}