const {Schema, model} = require('mongoose')

const marcasSchema = Schema({
    nombre: {
        type: String,
        require: [true, 'Nombre de usuario requerido']
    }, 
    estado: {
        type: Boolean,
        default: true, 
        require: true
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
    
})

module.exports = model('marcas', marcasSchema)