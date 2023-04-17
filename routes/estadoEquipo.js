const {Router} = require('express')
const {createEstadoEquipo, getEstadoEquipos,  updateEstadoEquipoByID} = require('../controllers/estadoEquipo')
const router = Router()

//Crear

router.post('/', createEstadoEquipo)

//Consultar todos

router.get('/', getEstadoEquipos)

//Actualizar

router.put('/', updateEstadoEquipoByID)

module.exports = router