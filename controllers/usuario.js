
const usuario = require('../models/usuario')
const Usuario = require('../models/usuario')
const {request, response} = require('express')
//crear
const createUsuario = async (req = request, res = response) => 
{
    try{
        const nombre = req.body.nombre ? req.body.nombre.toUpperCase()
        : ''
        const email = req.body.email ? req.body.email.toUpperCase()
        : ''
       const usuarioDB = await Usuario.findOne({nombre: nombre}, {email: email})//select * from Usuario = where nombre =?
       if (usuarioDB){
           return res.status(400).json({msg: 'ya existe'})
       }
       const data ={
        nombre,
        email
       }
       const usuario = new Usuario(data)
       console.log(usuario)
       await usuario.save()
       return res.status(201).json(usuario)

    }catch(e){
        return res.status(500).json({
            msg:'Error general' + e
        })
    }
   
}

//Listar todos
const getUsuario = async (req = request, res = response) => {

    try{
        const { estado } = req.query

        const nombre = req.body.nombre ? req.body.nombre.toUpperCase()
        : ''
       const usuarioDB = await Usuario.find({estado: estado})//select * from Usuario = where estado =?
       return res.json(usuarioDB)

    }catch(e){
        return res.status(500).json({
            msg:'Error general' + e
        })
    }

    
}

//Actualizar 
const updateUsuarioByID = async (req = request, res = response) => 
{
try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
    /*
    const usuarioDB = await Usuario.findById(id)
    if(!usuarioDB){
        return res.json({msg: 'No existe el usuario'})
    }
    */
        data.fechaActualizacion = new Date()
        console.log(data)
        const usuario = await Usuario.findByIdAndUpdate(id, data, {new: true})
        return res.json(usuario)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }   
    
}



module.exports = {createUsuario, getUsuario, updateUsuarioByID}