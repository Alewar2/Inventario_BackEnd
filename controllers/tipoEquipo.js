const tipoEquipo = require('../models/tipoEquipo')
const TipoEquipo = require('../models/tipoEquipo')
const {request, response} = require('express')
//crear
const createTipoEquipo = async (req = request, res = response) => 
{
    try{
        const nombre = req.body.nombre ? req.body.nombre.toUpperCase()
        : ''
       const tipoEquipoDB = await TipoEquipo.findOne({nombre: nombre})//select * from TipoEquipo = where nombre =?
       if (tipoEquipoDB){
           return res.status(400).json({msg: 'ya existe'})
       }
       const data ={
        nombre
       }
       const tipoEquipo = new TipoEquipo(data)
       console.log(tipoEquipo)
       await tipoEquipo.save()
       return res.status(201).json(tipoEquipo)

    }catch(e){
        return res.status(500).json({
            msg:'Error general' + e
        })
    }
   
}

//Listar todos
const getTipoEquipos = async (req = request, res = response) => {

    try{
        const { estado } = req.query

        const nombre = req.body.nombre ? req.body.nombre.toUpperCase()
        : ''
       const tipoEquiposDB = await TipoEquipo.find({estado: estado})//select * from TipoEquipo = where estado =?
       return res.json(tipoEquiposDB)

    }catch(e){
        return res.status(500).json({
            msg:'Error general' + e
        })
    }


}
//Actualizar 
const updateTipoEquipoByID = async (req = request, res = response) => 
{
try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
    /*
    const tipoequipoDB = await TipoEquipo.findById(id)
    if(!tipoequipoDB){
        return res.json({msg: 'No existe el tipo de equipo'})
    }
    */
        data.fechaActualizacion = new Date()
        console.log(data)
        const tipoEquipo = await TipoEquipo.findByIdAndUpdate(id, data, {new: true})
        return res.json(tipoEquipo)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }   
    
}


module.exports = {createTipoEquipo, getTipoEquipos, updateTipoEquipoByID}