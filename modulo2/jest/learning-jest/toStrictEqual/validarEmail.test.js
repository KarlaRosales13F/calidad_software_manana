const { validarEmail } = require('./validarEmail');

describe('validarEmail', () => {
    test('Happy Path: formato de email correcto', () => {
        const resultado = validarEmail('ejemplito@ejemplo.com');
        expect(resultado).toBe(true);
    });
    test('Sad Path: email incorrecto', () => {
        const resultado = validarEmail('ejemplito2@ejemplo.com');
        expect(resultado).toBe(false);
    });
    test('Sad Path: Elementos invalidos', () => {
        expect(() => {
            validarEmail(12345);
        }).toThrow('email debe ser string');
    });
});