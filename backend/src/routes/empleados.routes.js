const { Router }= require('express');
const router=Router();
const empleado=require('../controllers/empleados.controllers.js');
const {validarEmpleadoSueldo} = require("../middleware/validacion.js");
router.get('/',empleado.getEmpleados);
router.post('/',validarEmpleadoSueldo, empleado.createEmpleado);
router.get('/:id',empleado.getEmpleado);
router.put('/:id',empleado.editEmpleado);

module.exports = router;
