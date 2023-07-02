const { response } = require('express');
const bcrypt = require('bcrypt');
const Servants = require('../models/servants');

const getServant = async (req, res = response) => {
  let mensaje = '';
  try {
    const servants = await Servants.find();
    mensaje = servants;
  } catch (error) {
    mensaje = error;
  }

  res.json({
    servants: mensaje,
  });
};

const postServant = async (req, res = response) => {
  const body = req.body;
  let mensaje = '';
  const servant = new Servants(body);

  try {
    await servant.save();
    mensaje = 'Servant registrado exitosamente';
  } catch (error) {
    mensaje = error;
  }

  res.json({
    mensaje,
  });
};

const putServant = async (req, res = response) => {
  const body = req.body;
  let mensaje = '';

  try {
    await Servants.findOneAndUpdate(
      { _id: body._id },
      {
        nombre: body.nombre,
        mitologia: body.mitologia,
        clase: body.clase,
        fantasmaNoble: body.fantasmaNoble,
        invocacion: body.invocacion,
      }
    );
    mensaje = 'Servant modificado exitosamente.';
  } catch (error) {
    mensaje = error;
  }

  res.json({
    mensaje,
  });
};

const deleteServant = async (req, res = response) => {
  const body = req.body;
  let mensaje = '';

  try {
    await Servants.deleteOne({ _id: body._id });
    mensaje = 'Eliminado exitosamente';
  } catch (error) {
    mensaje = error;
  }

  res.json({
    mensaje,
  });
};

module.exports = {
  getServant,
  postServant,
  putServant,
  deleteServant,
}