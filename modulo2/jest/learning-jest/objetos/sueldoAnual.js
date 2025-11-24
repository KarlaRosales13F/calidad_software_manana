function SueldoAnual(empleado) {
    if (empleado === null || typeof empleado !== 'object'
         || Array.isArray(empleado)) {
        throw new TypeError("empleado invalido");
    }
    
    const { sueldoMensual } = empleado;

    if (typeof sueldoMensual !== 'number' || sueldoMensual <= 0 
        || !Number.isFinite(sueldoMensual)) {
        throw new TypeError("sueldo mensual invalido");
    }

    return sueldoMensual * 12;
}
module.exports = { SueldoAnual };