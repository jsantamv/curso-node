const { response } = require('express')


const usersGet = (req, res = response) => {
    res.json({
        msg: "get API - Controlador"
    })
}

const usersPost = (req, res = response) => {

    //esta es lo que me envia 
    //del paramatro en el request
    const { nombre, edad } = req.body;

    //esto es lo que devuelvo
    res.json({
        msg: "usersPost API - Controlador",
        nombre,
        edad
    })
}

const usersPut = (req, res = response) => {
    res.json({
        msg: "usersPut API - Controlador"
    })
}

const usersPatch = (req, res = response) => {
    res.json({
        msg: "usersPatch API - Controlador"
    })
}

const usersDelete = (req, res = response) => {
    res.json({
        msg: "usersDelete API - Controlador"
    })
}


module.exports = {
    usersGet,
    usersDelete,
    usersPatch,
    usersPut,
    usersPost
}



