const fs = require('fs')

/**
 * Forma de manejar una promesa
 * Crea un archivo con un numero base
 * @param {base} base 
 * @returns retorna una tabla se multiplicar s
 * segun su base
 */
const crearArchivo = (base = 5) => {

    return new Promise((resolve, reject) => {
        try {
            console.log('===================')
            console.log('=== TABLA DEL ', base)
            console.log('===================')

            let salida = ''
            const path = `tabla-${base}.txt`

            for (let i = 0; i <= 10; i++) {
                salida += (`${base} x ${i} = ${base * i}\n`)
            }

            var datp = 1 / 0
            fs.writeFileSync(path, salida)

            resolve(salida)

        } catch (err) {
            reject(err)
        }
    })
}

/**
 * Crea un archivo asyncronicamente
 * 
 */
const crearArchivoAsync = async (base = 5) => {

    try {
        console.log('===================')
        console.log('=== TABLA DEL ', base)
        console.log('===================')

        let salida = ''
        const path = `tabla-${base}.txt`

        for (let i = 0; i <= 10; i++) {
            salida += (`${base} x ${i} = ${base * i}\n`)
        }

        fs.writeFileSync(path, salida)

        return salida
        
    } catch (err) {
        throw err
    }

}


module.exports = {
    crearArchivo,
    crearArchivoAsync
}