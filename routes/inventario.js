const {Router} = require('express')
const {createInventario, getInventario, updateInventarioByID  } = require('../controllers/inventario')
const router = Router()

//Crear

router.post('/', createInventario)

//Consultar todos

router.get('/', getInventario)

//Actualizar

router.put('/', updateInventarioByID)

module.exports = router