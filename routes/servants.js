const { Router } = require('express');
const route = Router();


const {
  getServant,
  postServant,
  putServant,
  deleteServant,
} = require('../controllers/servants');
const { isAuthenticated } = require('../controllers/auth');


route.get('/servants', isAuthenticated, getServant);


route.post('/servants', isAuthenticated, postServant);


route.put('/servants', isAuthenticated,putServant);


route.delete('/servants', isAuthenticated,deleteServant);

module.exports = route;