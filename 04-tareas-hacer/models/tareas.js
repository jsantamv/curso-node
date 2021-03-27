const { registerPrompt } = require("inquirer")
const Tarea = require("./tarea")

class Tareas {

    _listado = {}

    get listadoArr() {
        const listado = []
        Object.keys(this._listado).forEach(key => {
            listado.push(this._listado[key])
        })
        return listado
    }

    constructor() {
        this._listado = {}
    }

    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    /**
     * Creacion de la tarea
     * @param {desc} desc 
     */
    crearTarea(desc = '') {

        const tarea = new Tarea(desc)

        this._listado[tarea.id] = tarea

    }

    /**
     * Retorna un listado las tareas
     * @param { Listado de tareas } tareas 
     */
    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }


    /**
     * Listado completo de las tareas
     */
    litadoCompleto() {

        console.log('\n')

        this.listadoArr.forEach((tarea, i) => {
            i = i + 1
            if (tarea.completadoEn == null)
                console.log(`${i}. PENDIENTE |  ${tarea.desc} Estado ${tarea.completadoEn} `.red)
            else
                console.log(`${i}. COMPLETA  |  ${tarea.desc}  Estado ${tarea.completadoEn}`.green)
        });
    }


    /**
     * Lista la tarea si esta true or false
     * @param {estado de la tarea} completada 
     */
    listarTareas(completada = true) {

        console.log('\n')

        this.listadoArr.forEach(({ completadoEn, desc }, i) => {
            i = i + 1

            if ((completada) && (completadoEn != null)) {
                console.log(`${i}. COMPLETA  | ${desc} `.green)
            }

            if (!(completada) && (completadoEn == null)) {
                console.log(`${i}. PENDIENTE | ${desc} `.red)
            }

        });
    }

    async toggleCompletadas(ids = []) {
        
        ids.forEach(id => {
            const tarea = this._listado[id]
            if (!tarea.completadoEn) {
                tarea.completadoEn = 1
            }
        })

        this.listadoArr.forEach(tarea => {
            if(!ids.includes(tarea.id)){ // muestra si existe
                this._listado[tarea.id].completadoEn = null
            }
        });
    }
}

module.exports = Tareas

