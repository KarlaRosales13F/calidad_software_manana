const { validarEmail, encontrarPalabra, limpiarTexto } = require('./validarEmail');

describe('toMatch matcher', () => {

    test('Happy Path: validar correos electronicos', () => {
        expect('usuario@email.com')
            .toMatch(/^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i);
        expect(validarEmail('alguien@dominio.ec')).toBe(true);
    });

    test('Happy path: encontrar palabra con regex', () => {
        expect(encontrarPalabra('Hola Jest', 'jest')).toBe(true);
    });

    test('Sad Path: Email o patron inválido', () => {
        expect(() => validarEmail(123)).toThrow('email debe ser string');
        expect(() => encontrarPalabra('Texto', 123))
            .toThrow('texto y patron deben ser strings');
    });

    test('Happy/Sad path: limpiar texto', () => {
        expect(limpiarTexto(' Hola mundo ')).toMatch(/^Hola mundo$/);
        expect(() => limpiarTexto(null)).toThrow('texto debe ser string');
    });
});
