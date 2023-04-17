const {Router} = require('express')
const {createUsuario, getUsuario, updateUsuarioByID} = require('../controllers/usuario')
const router = Router()

//Crear

router.post('/', createUsuario)

//Consultar todos

router.get('/', getUsuario)

//Actualizar

router.put('/', updateUsuarioByID)

module.exports = router