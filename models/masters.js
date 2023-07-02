const {Schema, model} = require('mongoose') 

const MastersSchema = Schema({

    nombre:{
        type: String,
        required: [true, "Debes ingresar un nombre"]
    },
    
    linaje:{
        type: String,
        required: [true, "Se requiere que introduzca su lineaje familiar (apellido)"]
    },
    nacionalidad:{
        type: String,
        required: [true, "Se requiere que introduzca su nacionalidad"]
    },
    especialidad:{
        type: String,
        default: "Magia de conjuracion",
        required: [true, "Se requiere que introduzca la magia en la que se especializa"]
    },
    guerra:{
        type: Boolean,
        default: false,
        required: [true, "Se requiere que especifique su participacion en la guerra del santo grial"]
    }
})

module.exports = model("Masters", MastersSchema)