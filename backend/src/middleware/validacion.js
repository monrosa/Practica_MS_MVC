const validarEmpleadoSueldo = (req, res, next) => {
    const { nombre, cargo, departamento, sueldo } = req.body;

    // Validar que se proporcionen todos los campos requeridos
    if (!nombre || !cargo || !departamento || !sueldo) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
    console.log('middleware');
    let sueldoBasico = 450;
    // Validar que el sueldo sea un número positivo
    if (typeof sueldo !== 'number' || sueldo >= suldoBasico) {
        return res.status(400).json({ error: 'Debe ser mayor a un sueldo basico.' });
    }

    // Si todos los datos son válidos, pasa al siguiente middleware
    next();
};



module.exports = {
    validarEmpleadoSueldo,
};