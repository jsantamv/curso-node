const fs = require('fs')
require('colors');
require('dotenv').config()
const axios = require('axios');


class Busquedas {

    historial = []
    path = './db/database.json'

    constructor() {
        // TODO
    }

    get historialCapitalizado() {
        return this.historial.map(lugar => {
            let palabras = lugar.split(' ');
            palabras.map(p => p[0].toUpperCase() + p.substring(1))

            return palabras.join(' ')
        })
    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': '5',
            'language': 'es'
        }
    }

    get paramsOpenWeather() {
        return {
            'APPID': process.env.OPENWEATHER_KEY,
            'units': 'metric',
            'lang': 'es'
        }
    }

    async ciudad(lugar = '') {

        try {
            const instance = axios.create({
                baseURL: `${process.env.BASE_URL_MAPBOX}${lugar}.json`,
                params: this.paramsMapbox
            })

            const resp = await instance.get()
            return resp.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lat: lugar.center[1],
                lng: lugar.center[0],
                latlng: `${lugar.center[1]},${lugar.center[0]}`
            }))
        }
        catch (error) {
            return error
        }
    }

    async clima(lat, lon) {

        try {
            const instance = axios.create({
                baseURL: process.env.BASE_URL_OPENWEATHER,
                params: { ...this.paramsOpenWeather, lat, lon }
            })

            const resp = await instance.get()

            const { weather, main } = resp.data

            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    agregarHistorial(lugar = '') {
        //TODO prevenir duplicados
        console.log(lugar.red)
        if (this.historial.includes(lugar.toLocaleLowerCase())) {
            console.log('la cuidad existe'.red)
            return
        }

        this.historial.unshift(lugar)

        this.guardarDB()
    }

    guardarDB() {
        const payload = {
            historial: this.historial
        }
        fs.writeFileSync(this.path, JSON.stringify(payload))
    }

    leerDb() {
        if (!fs.existsSync(this.path)) return

        const info = fs.readFileSync(this.path, { encoding: 'utf-8' })
        const data = JSON.parse(info)

        this.historial = data.historial


    }

}


module.exports = Busquedas