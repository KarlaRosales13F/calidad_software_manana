const { SueldoAnual } = require('./sueldoAnual');

describe('Sueldo Anual', () => {
    test('Happy Path: 500 -> 6000', () => {
        const empleado = { nombre: 'Pepe', sueldoMensual: 500 };
        expect(SueldoAnual(empleado)).toBe(6000);
    });

    test('Sad path: sueldo / empleado invalidos', () => {
        expect(() => SueldoAnual({ sueldoMensual: -1 })).toThrow('sueldo mensual invalido');
        expect(() => SueldoAnual(null)).toThrow('empleado invalido');
        expect(() => SueldoAnual({ sueldoMensual: 0 })).toThrow('sueldo mensual invalido');
        expect(() => SueldoAnual({ nombre: 'Pepe' })).toThrow('sueldo mensual invalido');
    });
});