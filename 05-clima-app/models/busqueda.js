require('dotenv').config()
const axios = require('axios');

class Busquedas {

    historial = ['Tegucigalpa', 'Madrid', 'San Jose', 'Bogota']

    constructor() {
        // TODO
    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': '5',
            'language': 'es'
        }
    }

    async ciudad(lugar = '') {

        console.log('Lugar ', lugar)
        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            })

            const resp = await instance.get()
            console.log(resp)

            return [] //retonar las cuidades
        }
        catch (error) {
            return error
        }
    }

}


module.exports = Busquedas