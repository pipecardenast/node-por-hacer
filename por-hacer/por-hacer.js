const fs = require('fs');

let tareasPorHacer = [];

const cargarBD = async () => {
  try {
    tareasPorHacer = require('../bd/datos.json');
  } catch (err) {
    tareasPorHacer = [];
  }
}

const guardarBD = async () => {
  datos = JSON.stringify(tareasPorHacer);

  fs.writeFile('bd/datos.json', datos, (err) => {
    if (err)
      throw new Error('No fue posible guardar las tareas por hacer', err);
  });
}

const crear = (descripcion) => {
  cargarBD();

  let tareaPorHacer = {
    descripcion,
    completado: false
  };

  tareasPorHacer.push(tareaPorHacer);
  guardarBD();

  return tareaPorHacer;
}

const obtenerListado = () => {
  cargarBD();

  return tareasPorHacer;
};

const actualizar = (descripcion, completado = true) => {
  cargarBD();

  let actualizado = false;
  let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

  if (index >= 0) {
    tareasPorHacer[index].completado = completado;
    guardarBD();
    actualizado = true;
  }

  return actualizado;
};

const borrar = (descripcion) => {
  cargarBD();

  let borrado = false;
  let nuevasTareaPorHacer = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion);

  if (tareasPorHacer.length > nuevasTareaPorHacer.length) {
    tareasPorHacer = nuevasTareaPorHacer;
    guardarBD();
    borrado = true;
  }

  return borrado;
};

module.exports = {
  crear,
  obtenerListado,
  actualizar,
  borrar
}
