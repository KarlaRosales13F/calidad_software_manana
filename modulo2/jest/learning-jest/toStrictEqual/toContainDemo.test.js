const {obtenerFrutas,
    contienePalabra,
    agregarElemento} =require('/obtenerFrutas');

describe('toContain Matcher', ()=>{
    test('Happy path: Elementos adentro del array', ()=>{
        const frutas= obtenerFrutas();
        expect(frutas).toContain('pera');
        });
    
    test('Sad path: palabra dentro del texto', 
        ()=>{
        const response= contienePalabra('Jest es super');
        expect(response).toBe(true);

    });

    test('Sad path: Elemento no encontrado o tipo incorrecto', 
        ()=>{
        const frutas= obtenerFrutas();
        expect(frutas).not.toContain('banana');

    });

    test('Sad path: Elementos invalido', 
        ()=>{
        const response= agregarElemento({},'x');
        expect (response)
            .toThrow('lista debe ser un array');

    });

});