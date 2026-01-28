const {obtenerFrutas,
    contienePalabra,
    agregarElemento} =require('./toContainDemo');

describe('toContain Matcher', ()=>{
    test('Happy path: Elementos adentro del array', ()=>{
        const frutas= obtenerFrutas();
        expect(frutas).toContain('pera');
    });
    
    test('Sad path: palabra dentro del texto', 
        ()=>{
        const response= contienePalabra('Jest es super', 'jest');
        expect(response).toBe(true);

    });

    test('Sad path: Elemento no encontrado o tipo incorrecto', 
        ()=>{
        const frutas= obtenerFrutas();
        expect(frutas).not.toContain('banana');

    });

    test('Sad path: Elementos invalido', 
        ()=>{
        expect(() => agregarElemento({},'x'))
            .toThrow('lista debe ser un array');
    });
});