const empleadoCtrl={};
const Empleado = require('../models/Empleado');

// const mongoose = require('mongoose');

// const mongoose = new MongooseSingleton();
empleadoCtrl.getEmpleados= async(req, res)=>
{
    const empleados= await Empleado.find();
    res.json(empleados);
}

empleadoCtrl.createEmpleado= async(req,res)=>{
    const {nombre, cargo,departamento,sueldo} = req.body;
    const empleado=new Empleado({
        nombre,
        cargo,
        departamento,
        sueldo
    });
    console.log(empleado);
    await empleado.save();
    res.json('status: Datos guardados');
}

empleadoCtrl.getEmpleado= async (req,res)=>{
    const {id} = req.params;
    try {
        
        const empleados= await Empleado.findById(id);
        res.status(200).send(empleados).end();
    } catch (error) {
        
        console.log(error);
    }
}

empleadoCtrl.editEmpleado=async(req,res)=>{
    const {_id}=req.params;
    const empleado={
        nombre: req.body.nombre,
        cargo: req.body.cargo,
        departamento: req.body.departamento,
        sueldo: req.body.sueldo
    };
    await Empleado.findByIdAndUpdate(_id, {$set:empleado},{new: true});
    res.json('status: Datos actualizados');
}

empleadoCtrl.deleteEmpleado=async(req,res)=>{
    await Empleado.findByIdAndRemove(req.params.id);
    res.json('status: Empleado ha sido removido');
}


module.exports=empleadoCtrl;