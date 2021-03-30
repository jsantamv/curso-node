const express = require('express')
require('dotenv').config()


class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT

        //Middlewares 
        this.middleware()

        // Routes de mi app
        this.routes();
    }


    middleware() {
        // directorio publico
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.status(403).json({
                msg: "get api"
            })
        })

        this.app.put('/api', (req, res) => {
            res.status(403).json({
                msg: "get api"
            })
        })

        this.app.post('/api', (req, res) => {
            res.status(403).json({
                msg: "get api"
            })
        })

        this.app.delete('/api', (req, res) => {
            res.status(403).json({
                msg: "get api"
            })
        })

        this.app.patch('/api', (req, res) => {
            res.status(403).json({
                msg: "get api"
            })
        })
    }

    lisetn() {
        this.app.listen(this.port, () => {
            console.log(`Server en => http://localhost:${this.port}`)
            console.log(`Server en => http://localhost:${this.port}/api`)

        })
    }
}

module.exports = Server