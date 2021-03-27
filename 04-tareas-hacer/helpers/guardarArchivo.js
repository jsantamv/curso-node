const fs = require('fs')

const archivo = './db/data.json'

const guardarInfoDB = (data) => {
    fs.writeFileSync(archivo, JSON.stringify(data))
}


const leerDb = () => {

    if (!fs.existsSync(archivo)) return null

    const info = fs.readFileSync(archivo, { encoding: 'utf-8' })
    return JSON.parse(info)
}

module.exports = {
    guardarInfoDB,
    leerDb
}