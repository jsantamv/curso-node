const { rejects } = require('assert');
const { green } = require('colors');
const { resolve } = require('path');

require('colors')

const mostrarMenu = () => {

    return new Promise(resolve => {
        console.clear()
        console.log('===================================='.green)
        console.log('   SELECIONE UNA OPCION '.yellow)
        console.log('====================================\n'.green)

        console.log(`${'1.'.green} Crear una tarea`)
        console.log(`${'2.'.green} Listar las tareas`)
        console.log(`${'3.'.green} Listar tareas Completadas`)
        console.log(`${'4.'.green} Listar tareas Pendientes`)
        console.log(`${'5.'.green} Completar tareas`)
        console.log(`${'6.'.green} Crear Tarea`)
        console.log(`${'0.'.green} Salir\n`)

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question('Selecione una opcion: ', (opt) => {
            readline.close()
            resolve((opt))
        })
    });
}


const pausa = () => {

    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) => {
            readline.close()
            resolve()
        })
    })

}




module.exports = {
    mostrarMenu,
    pausa
}