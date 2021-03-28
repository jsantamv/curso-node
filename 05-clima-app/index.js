const { green } = require('colors');
const {
    inquirerMenu,
    pausa,
    leerInput
} = require('./helpers/inquirer');
const Busquedas = require('./models/busqueda');

const main = async () => {

    const busquedas = new Busquedas()
    let opt = ''

    do {

        opt = await inquirerMenu()

        switch (opt) {
            case 1:
                // mostrar mensajes
                const lugar = await leerInput('Cuidad: ')
                const data = await busquedas.ciudad(lugar)
                console.log(data)
                console.log('LAT')
                console.log('Long')
                console.log('Temp')
                console.log('Min')
                console.log('Max')
                break
            default:
                break
        }

        if (opt !== 0) await pausa()

    } while (opt !== 0)

}



main()