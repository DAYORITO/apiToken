const cookieParser = require('cookie-parser');
const express = require('express')
const cors  = require('cors');
const bodyParser = require('body-parser')

const dbConection = require('../database/config')


class Server{
    
    constructor () {
        this.app = express()

        this.port = process.env.PORT
        this.mastersPath= '/api/masters'
        this.usuariosPath = '/api/usuarios' 
        this.authPath = '/api/auth' 
        this.servantsPath = '/api/servants'

        this.middlewares()//Seguridad

        this.routes()

        this.dbConectar()

    }

    middlewares() //Directorio Publico
    {
        this.app.use(cookieParser()); 
        // this.app.use(express.static(__dirname + "/public"));
        this.app.use( cors() );
        this.app.use(bodyParser.json()) // for parsing application/json
    }

    routes()
    {
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
        this.app.use(this.authPath, require('../routes/auth'))
        this.app.use(this.mastersPath, require('../routes/masters'))
        this.app.use(this.servantsPath, require('../routes/servants'))

    }

    async dbConectar(){
        await dbConection()
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }
}


module.exports = Server