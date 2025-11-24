function validarObjeto(variable, nombre='objeto'){
    if (!variable || typeof variable !== 'object' || Array.isArray(variable)) {
        throw new TypeError (`${nombre} debe ser objeto`);
    }
}

function deepMerge(objeto1, objeto2){
    validarObjeto(objeto1, 'objeto1');
    validarObjeto(objeto2, 'objeto2');

    const salida = {...objeto1};

    for (const [k,v] of Object.entries(objeto2)){
        if(
            k && 
            typeof v === 'object' && 
            v !== null && 
            !Array.isArray(v) && 
            typeof salida[k] === 'object' && 
            salida[k] !== null && 
            !Array.isArray(salida[k])
        ) {
            salida[k] = deepMerge(salida[k], v);
        } else {
            salida[k] = v;
        }
    }
    return salida;
}

function normalizarAlumno(alumno) {
    validarObjeto(alumno, 'alumno');
    const { notas } = alumno;
    if (!Array.isArray(notas) || notas.length === 0) {
        return { ...alumno, promedio: 0 };
    }
    const suma = notas.reduce((acc, nota) => acc + nota, 0);
    const promedio = Math.round(suma / notas.length);

    return { ...alumno, promedio: promedio };
}

module.exports={deepMerge, normalizarAlumno}