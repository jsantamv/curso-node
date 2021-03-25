const inquirer = require('inquirer');
require('colors')


const preguntas = [
    {
        type: 'list',
        name: 'option',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear Tarea'
            },
            {
                value: '2',
                name: '2. Listar Tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea(s)'
            },
            {
                value: '6',
                name: '6. Crear Tarea'
            },
            {
                value: '7',
                name: '7. Borrar Tarea'
            },
            {
                value: '0',
                name: 'O. SALIR'
            }
        ]
    }
]

const inquirerMenu = async () => {
    console.clear()
    console.log('===================================='.green)
    console.log('   SELECIONE UNA OPCION '.yellow)
    console.log('====================================\n'.green)

    const { opt } = await inquirer.prompt(preguntas)

    return opt;
}

const pausa = async () => {

    const quetion = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar`
        }
    ]
    console.log('\n')
    await inquirer.prompt(quetion)
}

module.exports = {
    inquirerMenu,
    pausa
}