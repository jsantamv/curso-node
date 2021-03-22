const { crearArchivo, crearArchivoAsync } = require('./helpers/multiplicar')

console.clear()

const [, , arg3 = 'base = 5'] = process.argv
const [, base = 0] = arg3.split('=')

console.log(base)

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));

// crearArchivoAsync(base2)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(err => console.log(err));
