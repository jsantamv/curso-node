const fs = require('fs')

const guardarInfoDB = (data) => {

    const archivo = './db/data.json'

    fs.writeFileSync(archivo,JSON.stringify(data))
}

module.exports = {
    guardarInfoDB
}