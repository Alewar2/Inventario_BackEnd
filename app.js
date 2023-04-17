const express = require('express')
const app = express()
const cors = require('cors')

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))



const tipoEquipo = require('./routes/tipoEquipo')
const estadoEquipo = require('./routes/estadoEquipo')
const usuario = require('./routes/usuario')
const marcas = require('./routes/marcas')
const inventario = require('./routes/inventario')


//middleware
app.use('/api/tiposequipos', tipoEquipo)
app.use('/api/estadoequipos', estadoEquipo)
app.use('/api/usuarios', usuario)
app.use('/api/marcas', marcas)
app.use('/api/inventario', inventario)
module.exports = app


