
require('colors');
const {
    inquirerMenu,
    pausa,
    leerInput
    , listarLugares
} = require('./helpers/inquirer');

const Busquedas = require('./models/busqueda');
/*******************************************************************/

const main = async () => {

    const busquedas = new Busquedas()
    let opt = ''

    do {

        opt = await inquirerMenu()

        switch (opt) {
            case 1:
                // mostrar mensajes                
                const lugares = await busquedas.ciudad(await leerInput('Cuidad: '))
                //Selecionar el lugar 
                const id = await listarLugares(lugares)

                if (id === '0') continue

                const lugarSel = lugares.find(l => l.id === id)

                //Guardar en db
                busquedas.agregarHistorial(lugarSel.nombre)

                const clima = await busquedas.clima(lugarSel.lat, lugarSel.lng)

                console.log('\n ==========< Informacion de la Cuidad >=========\n'.green)
                console.log('Nombre   : ', `${lugarSel.nombre}`.blue)
                console.log('Latitud  : ', lugarSel.lat)
                console.log('Longitud : ', lugarSel.lng)
                console.log('LatLng   : ', lugarSel.latlng.green)
                console.log('Descrip  : ', clima.desc.blue)
                console.log('Temp     : ', clima.temp)
                console.log('Min      : ', clima.min)
                console.log('Max      : ', clima.max)
                console.log('\n ==============================================\n'.green)

                break
            case 2:
                busquedas.leerDb()
                busquedas.historialCapitalizado.forEach((lugar, i) => {
                    const idx = `${i + 1}.`.blue
                    console.log(`${idx} ${lugar}`)
                });
                break;
            default:
                break
        }

        if (opt !== 0) await pausa()

    } while (opt !== 0)

}



main()