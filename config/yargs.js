const descripcion = {
  demand: true,
  alias: 'd',
  desc: "Descripción de la tarea por hacer"
};
const completado = {
  alias: 'c',
  desc: "Indica el nuevo estado de la tarea por hacer",
  default: true
}

const argv = require('yargs')
  .command('listar', 'Lista todas las tareas por hacer')
  .command('crear', 'Crea una tarea por hacer', {
    descripcion
  })
  .command('actualizar', 'Actualiza el estado completado de una tarea por hacer', {
    descripcion,
    completado
  })
  .command('borrar', 'Borra una tarea por hacer', {
    descripcion
  })
  .help()
  .argv;

module.exports = {
  argv
};
