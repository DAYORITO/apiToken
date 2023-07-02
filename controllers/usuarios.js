const {response} = require('express')
const bcrypt = require('bcrypt');
const Usuarios = require('../models/usuarios')



const getUsuario = async(req, res=response) => {
    let mensaje = ''
    try {
        const usuarios = await Usuarios.find()
        mensaje = usuarios
    } catch (error) {
        mensaje = error
    }

   res.json({
        usuarios:mensaje
    })
    
}


const postUsuario = async (req, res = response) => {
    const body = req.body;
    let mensaje = '';
    const usuario = new Usuarios(body);
    
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(body.password, saltRounds);

    usuario.password = hashedPassword;

    try {
        await usuario.save();
        mensaje = 'Usuario registrado exitosamente';
    } catch (error) {
        mensaje = error;
    }

    res.json({
        mensaje
    });
}

const putUsuario = async(req, res = response) =>{
    
    const body = req.body 
     console.log(body)

    let mensaje = ''

    try {
        if(body.tipoModificacion == 'Unitaria' || body.tipoModificacion == ''){
            await Usuarios.findOneAndUpdate({_id:body._id}, {rol:body.rol, estado:body.estado})

            mensaje = 'Usuario modificado exitosamente. Modificación: Sencilla'
        }
        else{
            await Usuarios.updateMany({password:body.password}, {rol:body.rol, estado:body.estado})
            mensaje = 'Usuario modificado exitosamente. Modificación: Múltiple'
        }

    } catch (error) {
        mensaje = error
    }
   
    res.json({
        mensaje:mensaje
    })
   
}

const deleteUsuario = async(req, res = response) =>{
    const body = req.body
    let mensaje = ''

    try {
        await Usuarios.deleteOne({_id:body._id})
        mensaje = 'Eliminado exitosamente'
    } catch (error) {
        mensaje = error
    }
    res.json({
        mensaje
    })
   
}

module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}