const {Router} = require('express')
const {createTipoEquipo, getTipoEquipos, updateTipoEquipoByID} = require('../controllers/tipoEquipo')
const router = Router()

//Crear

router.post('/', createTipoEquipo)

//Consultar todos

router.get('/', getTipoEquipos)

//Actualizar 

router.put('/', updateTipoEquipoByID)

module.exports = router