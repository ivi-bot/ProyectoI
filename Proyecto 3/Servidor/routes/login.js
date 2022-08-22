var express = require('express');
var router = express.Router();
const Sequelize =require('sequelize');
var userconnection = require('../models').usuario;


/* GET users listing. */
router.get('/', async function(req, res, next) {
  const categoria =await userconnection.findAll();
  console.log(categoria);
  res.render('login', { title: 'Login',cat:categoria});

});



  /*


router.post('/validate', function (req, res, next) {
  let usuario = req.body.user;
  let contrasenia = req.body.password;

  console.log("usuario: ", usuario)
  console.log("contraseña: ", contrasenia)
  let j=userconnection.findAll().then(productos => {arrProductos: productos }).forEach(function(producto){ 
    producto.nickname}) ;
  console.log(j);
  res.redirect('/')

  for (const db of Object.keys(userconnection)) {
    if (usuario == userconnection[db].nickname && contrasenia == userconnection[db].contrasena) {
      res.redirect('/');
    } else {
      res.redirect('/login')


    }
  }
});


let bd = {  
  'usuario': 'abc',  
  'contrasenia': '123'  
}

router.post('/validate', function(req, res, next) {  
  let usuario = req.body.user;  
  let contrasenia = req.body.password;  
    
  console.log("usuario: ", usuario)  
  console.log("contraseña: ", contrasenia)  
    
  //Validación  
  if(usuario == bd['usuario'] && contrasenia == bd['contrasenia']) {  
    res.redirect('/');  
  } else {  
    res.redirect('/login')  
  }  
    
});*/
module.exports = router;
