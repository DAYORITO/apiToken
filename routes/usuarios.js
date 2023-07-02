const { Router } = require('express');
const route = Router();


const {
  getUsuario,
  postUsuario,
  putUsuario,
  deleteUsuario,
} = require('../controllers/usuarios');
const { isAuthenticated } = require('../controllers/auth');


route.get('/usuarios', isAuthenticated,getUsuario);


route.post('/usuarios', isAuthenticated,postUsuario);


route.put('/usuarios', isAuthenticated,putUsuario);


route.delete('/usuarios', isAuthenticated,deleteUsuario);

module.exports = route;