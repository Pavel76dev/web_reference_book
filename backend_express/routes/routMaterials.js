var express = require('express');
var router = express.Router();
var api = require('./apiMaterials.js')

// Получение списка элементов
router.get('/', function (req, res, next) {
  api.find().then(function (document) {
    res.json(document);
  })
});

// Создание нового элемента
router.post('/', function (req, res, next) {
  //	req.body.author = req.session.user.id;
  api.add(req.body).then(function (document) {
    res.json(document);
  })
});

/* GET users listing. */
/*
router.get('/', function (req, res, next) {
  // console.log('get');
  Materials.find().then(function (document) {
    res.json(document);
  })

  // Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  // res.json([{
  //   id: 1,
  //   username: "Павел"
 //  }, {
  //   id: 2,
  //   username: "Stop123"
  // }, {
  //   id: 2,
  //   username: "вапвап123"
 //  }]);
   
});
*/
router.post('/', (req, res) => {


});


module.exports = router;
/*

  const data = (req.body).then(data => res.send(data));

  const materials = new Materials({
    title: data.quantity,//заглавие
    description: data.quantity,//описание
    unitOfMeasurement: data.quantity,//единицы измерееия
    quantity: data.quantity//кличество
  });

  () => {
    materials.save();
    if (err) {
      res.send({ 'error': 'An error has occurred' });
    } else {
      res.send(materials);
    }
  }
 */