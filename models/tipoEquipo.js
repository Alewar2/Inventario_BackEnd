const {Schema, model} = require('mongoose')

const TipoEquipoSchema = Schema({
    nombre: {
        type: String,
        require: [true, 'Nombre tipo de equipo requerido']
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

module.exports = model('TipoEquipo', TipoEquipoSchema)