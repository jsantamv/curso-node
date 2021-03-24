const inquirer = require('inquirer');
require('colors')


const preguntas = [
    {
        type: 'list',
        name: 'option',
        message:'Que desea hacer?',
        choices: ['opt1','opt2','opt3','opt4']
    }

]

const inquirerMenu = async () => {
    console.clear()
    console.log('===================================='.green)
    console.log('   SELECIONE UNA OPCION '.yellow)
    console.log('====================================\n'.green)

    const opt = await inquirer.prompt(preguntas)

    return opt;

}

module.exports = {
    inquirerMenu,
}