const {Schema, model} = require('mongoose') 

const servantsSchema = Schema({

    nombre:{
        type: String,
        required: [true, "Debes ingresar un nombre"]
    },
    
    mitologia:{
        type: String,
        required: [true, "Se requiere la mitologia de la que proviene"]
    },
    clase:{
        type: String,
        required: [true, "Se requiere la clase del servant"]
    },
    fantasmaNoble:{
        type: String,
        default: "Magia de conjuracion",
        required: [true, "Se requiere que introduzca el np del servant"]
    },
    invocacion:{
        type: Boolean,
        default: false,
        required: [true, "Se requiere que especifique su participacion en la guerra del santo grial"]
    }
})

module.exports = model("Servants", servantsSchema)