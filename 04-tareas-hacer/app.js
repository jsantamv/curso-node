require('colors')
const { guardarInfoDB } = require('./helpers/guardarArchivo')
const {
    inquirerMenu,
    pausa,
    leerInput
} = require('./helpers/inquirer')
const Tarea = require('./models/tarea')
const Tareas = require('./models/tareas')

const main = async () => {

    let opt = ''
    const tareas = new Tareas()

    do {
        opt = await inquirerMenu()
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion: ')
                tareas.crearTarea(desc)
                break;
            case '2':
                console.log(tareas.listadoArr)
                break;
            default:
                break;
        }

        guardarInfoDB(tareas.listadoArr)

        await pausa()

    } while (opt !== '0')
}


main();

