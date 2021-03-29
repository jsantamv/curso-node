
const http = require('http')
const port = 8083

http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-type': 'application/json'
    })

    const persona = {
        id: 1,
        nombre: 'Jsanta'
    }

    res.write(JSON.stringify(persona))
    res.end()
})
    .listen(port)

console.log(`escushando en el puerto ${port}`)
console.log(`http://localhost:${port}`)
