const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Numero base de la tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw new Error("La base: tiene que ser un numero")
        } else {
            return true // tell Yargs that the arguments passed the check
        }
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en la consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'X Numeros de la tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.h)) {
            throw new Error("La hasta: tiene que ser un numero")
        } else {
            return true // tell Yargs that the arguments passed the check
        }
    })
    .argv

module.exports = argv