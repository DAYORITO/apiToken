const {Schema, model} = require('mongoose') 


const UsuarioSchema = Schema({

    documento:{
        unique: true,
        type: Number,
        required: [true, 'Se requiere el documento de identidad']
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },

    password: {
        type: String,
        required: [true, 'El password es obligatorio'],
        minlength: [6, 'Mínimo debe digitar 6 caracteres'],
    },

    rol: {
        type: String,
        enum: ['Sacerdote', 'Ejecutor'],
        required: [true, 'El rol es obligatorio']
    },

    estado: {
        type: Boolean,
        default: true,
        required: [true, 'El estado es obigatorio']
    }
})

module.exports = model('Usuarios', UsuarioSchema)