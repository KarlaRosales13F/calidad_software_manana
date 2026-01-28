const { calcularTotalCafeteria } = require('./calcular');

describe('calcularTotalCafeteria', ()=>{
    test('Happy path: Calcular correctamente', () => {
        const items =
            [
                {
                    nombre: "Laptop",
                    precioUnitario: 500,
                    cantidad: 3
                },
                {
                    nombre: "Monitor",
                    precioUnitario: 300,
                    cantidad: 2
                },
            ]
        const resultado = calcularTotalCafeteria(items, 15);
        expect(resultado).toBe(2415);
    });


    test('Sad path: Valores de ingreso errados', () => {
        const items =
            [
                {
                    nombre: "Laptop",
                    precioUnitario: 500,
                    cantidad: 3
                },
                {
                    nombre: "Monitor",
                    precioUnitario: 300,
                    cantidad: 2
                },
            ]
        expect(() => calcularTotalCafeteria(0,12))
            .toThrow('array invalido');
        expect(() => calcularTotalCafeteria(items, "ee"))
            .toThrow('ivaPorcentaje No válido');
    });


});
