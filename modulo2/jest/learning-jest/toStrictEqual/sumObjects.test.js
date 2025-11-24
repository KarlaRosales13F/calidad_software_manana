const { sumObjects } = require('./sumObjects');

describe('Suma de Objetos', () => {
    test('Happy path: Suma de Objetos correctamente', () => {
        const objeto1 = { x: 2, y: 3 };
        const objeto2 = { x: 1, y: 4 };

        const response = sumObjects(objeto1, objeto2);
        expect(response).toStrictEqual({ x: 3, y: 7 });
    });

    test('Sad path: ignora propiedades extra', 
        () => {
            const objeto1 = { x: 2, y: 3 };
            const objeto2 = { x: 1, y: 4, z: 0 };
            const response = sumObjects(objeto1, objeto2);
            expect(response).toStrictEqual({ x: 3, y: 7 }); 
        });

    test('Sad path: falla si falta una propiedad',
        () => {
            const objeto1 = { x: 2 }; 
            const objeto2 = { x: 1, y: 4 };
            expect(() => sumObjects(objeto1, objeto2)).toThrow();
        });
});