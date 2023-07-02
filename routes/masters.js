const { Router } = require('express');
const route = Router();


const {
  getMaster,
  postMaster,
  putMaster,
  deleteMaster,
} = require('../controllers/masters');
const { isAuthenticated } = require('../controllers/auth');


route.get('/masters', isAuthenticated, getMaster);


route.post('/masters', isAuthenticated, postMaster);


route.put('/masters', isAuthenticated, putMaster);


route.delete('/masters', isAuthenticated, deleteMaster);

module.exports = route;