var express = require('express');
const fundacion = require('../models/fundacion.js');
var router = express.Router();
const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);  

var userconnection = require('../models').usuario;
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/mascotas', function (req, res, next) {
  res.render('mascotas', { title: 'Mascotas' });
});
/*
router.get('/private', function (req, res, next) {
  userconnection.findAll()
    .then(productos => {
      res.render('private', { title: 'My Dashboard :: Reporte', arrProductos: productos });
    })
    .catch(error => res.status(400).send(error))
});
*/
router.get('/private', function (req, res, next) {
  userconnection.findAll()
    .then(user => {
      res.send(user);
    })
    .catch(error => res.status(400).send(error))
});

router.get('/private/:id', function (req, res, next) {
  let id_user=req.params.id;
  userconnection.findOne({
    where:{
      idUsuario:id_user
    }
  })
    .then(user => {
      res.send(user);
    })
    .catch(error => res.status(400).send(error))
});


router.get('/adoptante', function(req, res, next) {  
  models.adoptante.findAll({
    include: [{ 
      model: models.usuario,
      as: 'tipo_usuario'
    }],
  })
 .then(adoptantes => {
    res.json(adoptantes)
 })
 .catch(error => res.status(400).send(error))


});

router.get('/fundacion', function(req, res, next) {  
  
  models.fundacion.findAll({
    include: [{ 
      model: models.usuario,
      as: 'tipo_usuario'
    }],
  })
 .then(fundaciones => {
    res.json(fundaciones)
 })
 .catch(error => res.status(400).send(error))
});

router.get('/mascota/:id/', function(req, res, next) {  
  let id_user=req.params.id;
  models.mascota.findAll({
    include: [{ 
      model: models.adoptante,
      as: 'duenio_adoptante'
    }],
    where:{
      duenio:id_user
    }
  })
 .then(mascotas => {
    res.json(mascotas)
 })
 .catch(error => res.status(400).send(error))
});

module.exports = router;
