require('colors')
const { guardarInfoDB, leerDb } = require('./helpers/guardarArchivo')
const {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmarAsync,
    mostrarListCheckList
} = require('./helpers/inquirer')
const Tarea = require('./models/tarea')
const Tareas = require('./models/tareas')

const main = async () => {

    //Variables
    let opt = ''
    const tareas = new Tareas()
    const taraesDb = leerDb();


    if (taraesDb) { //cargar tareas
        tareas.cargarTareasFromArray(taraesDb)
    }

    do {
        opt = await inquirerMenu()
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion: ')
                tareas.crearTarea(desc)
                break;
            case '2':
                //console.log(tareas.listadoArr)
                tareas.litadoCompleto()
                break;
            case '3':
                tareas.listarTareas(true)
                break;
            case '4':
                tareas.listarTareas(false)
                break;
            case '5':
                const ids = await mostrarListCheckList(tareas.listadoArr)                
                await tareas.toggleCompletadas(ids)
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr)
                if (id !== '0') {
                    const ok = await confirmarAsync('Esta seguro?')
                    if (ok) {
                        tareas.borrarTarea(id)
                        console.log(`=== TAREA ${id} ELIMINADA ===`.red)
                    }
                }

                break;
            default:
                break;
        }

        guardarInfoDB(tareas.listadoArr)
        await pausa()

    } while (opt !== '0')
}


main();

