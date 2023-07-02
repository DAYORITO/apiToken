const { response } = require('express');
const bcrypt = require('bcrypt');
const Master = require('../models/masters');

const getMaster = async (req, res = response) => {
  let mensaje = '';
  try {
    const masters = await Master.find();
    mensaje = masters;
  } catch (error) {
    mensaje = error;
  }

  res.json({
    masters: mensaje,
  });
};

const postMaster = async (req, res = response) => {
  const body = req.body;
  let mensaje = '';
  const master = new Master(body);

  try {
    await master.save();
    mensaje = 'Master registrado exitosamente';
  } catch (error) {
    mensaje = error;
  }

  res.json({
    mensaje,
  });
};

const putMaster = async (req, res = response) => {
  const body = req.body;
  let mensaje = '';

  try {
    await Master.findOneAndUpdate(
      { _id: body._id },
      {
        nombre: body.nombre,
        linaje: body.linaje,
        nacionalidad: body.nacionalidad,
        especialidad: body.especialidad,
        guerra: body.guerra,
      }
    );
    mensaje = 'Master modificado exitosamente.';
  } catch (error) {
    mensaje = error;
  }

  res.json({
    mensaje,
  });
};

const deleteMaster = async (req, res = response) => {
  const body = req.body;
  let mensaje = '';

  try {
    await Master.deleteOne({ _id: body._id });
    mensaje = 'Eliminado exitosamente';
  } catch (error) {
    mensaje = error;
  }

  res.json({
    mensaje,
  });
};

module.exports = {
  getMaster,
  postMaster,
  putMaster,
  deleteMaster,
};