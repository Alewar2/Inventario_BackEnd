const {Schema, model} = require('mongoose')

const InventarioSchema = Schema({
    serial:{
        type: String,
        required: [true, 'Serial Requerido'],
        unique: [true, 'Equipo en uso']
    },
    modelo: {
        type:  String,
        required: [true, 'modelo requerido'],
        unique: [true, 'modelo debe ser unico'],

    },
    descripcion: {
        type: String,
    },
    foto: {
        type: String,
    },
    color: {
        type: String,
    },
    fechaCompra: {
         type: Date,
    },
    precio: {
        type: Number,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'usuario',
        required: true
    },
    marcas: {
        type: Schema.Types.ObjectId,
        ref: 'marcas',
        required: true
    },
    estadoEquipo: {
        type: Schema.Types.ObjectId,
        ref: 'EstadoEquipo',
        required: true
    },
    tipoEquipo: {
        type: Schema.Types.ObjectId,
        ref: 'TipoEquipo',
        Required: true
    }
  
})

module.exports = model('Inventario', InventarioSchema)