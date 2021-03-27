const { leerInput, pausa } = require("./helpers/inquirer")


const main = async () => {
    const texto = await leerInput('Que desea hacer')
    console.log(texto)

    await pausa()
}



main()