require('yargs')
require('colors')
const { crearArchivoAsync } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear()

crearArchivoAsync(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(`Finaliza la creacion tabla del: ${argv.b}`.rainbow))
    .catch(err => console.log(err));