const { crearArchivo, crearArchivoAsync } = require('./helpers/multiplicar')
const argv = require('yargs').argv

console.clear()

console.log(process.argv)
console.log(argv)

console.log('base: yargs',argv.base)

console.log(argv.listar)
