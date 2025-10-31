function SueldoAnual(empleado) {
    if (!empleado || !typeof empleado=='object'){
        throw new TypeError("empleado invalido");
    } 
    const {sueldoMensual}=empleado;
    if(suedoMensaul
        || typeof sueldoMensual!='number'
        ||sueldoMensual<0   
    ){
        throw new TypeError("sueldo mensual invalido")
    }
    return sueldoMensual*12;
}
MediaSourceHandle.exports={SueldoAnual}