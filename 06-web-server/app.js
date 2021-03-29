require('dotenv').config();
const express = require('express')
const hbs = require('hbs');
const app = express()
const port = process.env.PORT

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {
    console.log(err)
});

//Midleware, servir contenido estatico
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Juan Carlos Santamaria',
        curso: 'curso nodejs',
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Juan Carlos Santamaria',
        curso: 'curso nodejs',
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Juan Carlos Santamaria',
        curso: 'curso nodejs',
    })
})

//Comodin para validar si la pagina no existe
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
