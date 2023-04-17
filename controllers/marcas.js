const marcas = require('../models/marcas')
const Marcas = require('../models/marcas')
const {request, response} = require('express')
//crear
const createMarcas = async (req = request, res = response) => 
{
    try{
        const nombre = req.body.nombre ? req.body.nombre.toUpperCase()
        : ''
       const marcasDB = await Marcas.findOne({nombre: nombre})//select * from Usuario = where nombre =?
       if (marcasDB){
           return res.status(400).json({msg: 'ya existe'})
       }
       const data ={
        nombre
       }
       const marcas = new Marcas(data)
       console.log(marcas)
       await marcas.save()
       return res.status(201).json(marcas)

    }catch(e){
        return res.status(500).json({
            msg:'Error general' + e
        })
    }
   
}

//Listar todos
const getMarcas = async (req = request, res = response) => {

    try{
        const { estado } = req.query

        const nombre = req.body.nombre ? req.body.nombre.toUpperCase()
        : ''
       const marcasDB = await Marcas.find({estado: estado})//select * from Usuario = where estado =?
       return res.json(marcasDB)

    }catch(e){
        return res.status(500).json({
            msg:'Error general' + e
        })
    }

    
}

//Actualizar 
const updateMarcasByID = async (req = request, res = response) => 
{
try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
    /*
    const marcasDB = await Marcas.findById(id)
    if(!marcasDB){
        return res.json({msg: 'No existe la marca'})
    }
    */
        data.fechaActualizacion = new Date()
        console.log(data)
        const marcas = await Marcas.findByIdAndUpdate(id, data, {new: true})
        return res.json(marcas)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }   
    
}


module.exports = {createMarcas , getMarcas, updateMarcasByID}