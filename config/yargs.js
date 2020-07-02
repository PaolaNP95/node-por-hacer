const opt = {
    description: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true,
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opt)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opt)
    .command('borrar', 'Se ha borrado la tarea', opt)
    .help()
    .argv;

module.exports = {
    argv
}