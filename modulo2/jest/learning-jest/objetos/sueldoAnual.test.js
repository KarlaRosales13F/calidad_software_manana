const {sueldoAnual} = require('./sueldoAnual');

describe('Sueldo Anual',()=>{
    test('Happy Path:500 -> 6000', () =>{
        expect(SueldoAnual('Pepe',500)).toEqual({
            nombre:'Pepe',
            sueldoMensual: 500
        });
    });
    test('Sad path: nombre / sueldo invalidos', ()=>{
        expect(()=>SueldoAnual({sueldoMensual: -1})).toThrow('sueldo mensual invalido');
        expect(()=>SueldoAnual(null)).toThrow('empleado invalido');
    });
});