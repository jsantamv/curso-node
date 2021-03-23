const fs = require('fs')
const colors = require('colors')

/**
 * Crea un archivo asyncronicamente
 * 
 */
const crearArchivoAsync = async (base = 5, listar, hasta) => {

    try {

        let salida,consola = ''
        const path = `./output/tabla-${base}.txt`

        for (let i = 0; i <= hasta; i++) {
            salida += (`${base} x ${i} = ${base * i}\n`)
            consola += (`${base} ${colors.green('x')} ${i} ${'='.green} ${base * i}\n`)
        }

        if (listar) {
            console.log('==================='.green)
            console.log('=== TABLA DEL '.yellow, colors.cyan(base))
            console.log('==================='.green)
            console.log(consola)
        }

        fs.writeFileSync(path, salida)

        return salida

    } catch (err) {
        throw err
    }

}


module.exports = {
    crearArchivoAsync
}