const { Router } = require('express')
const { usersGet,
    usersDelete,
    usersPatch,
    usersPut,
    usersPost } = require('../controllers/users')

const router = Router()


//Llamados
router.get('/', usersGet)

router.put('/', usersPut)

router.post('/', usersPost)

router.delete('/', usersDelete)

router.patch('/', usersPatch)


module.exports = router