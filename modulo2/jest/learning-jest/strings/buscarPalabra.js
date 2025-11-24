function contarPalabras(texto) {
    if (typeof texto !== 'string' || !texto.trim()) {
        throw new TypeError("frase inválida");
    }
    return texto.trim().split(/\s+/).length;
}

module.exports = { contarPalabras };