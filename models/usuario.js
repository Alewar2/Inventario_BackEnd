const {Schema, model} = require('mongoose')

const usuarioSchema = Schema({
    nombre: {
        type: String,
        require: [true, 'Nombre de usario requerido']
    },
    
    email: {
        type: String,
        require: [true, 'email de usuario requerido']
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

module.exports = model('usuario', usuarioSchema)