require('dotenv').config(); //Cargar toda la importación

const Server = require('../api login/models/server')

const server = new Server() //Creando un objeto de Server

server.listen()