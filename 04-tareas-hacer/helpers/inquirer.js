const { registerPrompt } = require('inquirer');
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
                name: `${'1.'.green} Crear Tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar Tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Crear Tarea`
            },
            {
                value: '7',
                name: `${'7.'.green} Borrar Tarea`
            },
            {
                value: '0',
                name: `${'O.'.green} SALIR`
            }
        ]
    }
]

const inquirerMenu = async () => {
    console.clear()
    console.log('===================================='.green)
    console.log('   SELECIONE UNA OPCION '.yellow)
    console.log('====================================\n'.green)

    const { option } = await inquirer.prompt(preguntas)

    return option;
}

const pausa = async () => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar`
        }
    ]

    console.log('\n')
    await inquirer.prompt(question)
}

const leerInput = async (message) => {

    console.log('etre')

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor'
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question)
    return desc
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}