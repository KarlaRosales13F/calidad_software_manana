function sumObjects (a,b){
    if (typeof a.x !== 'number' || typeof a.y !== 'number' || 
        typeof b.x !== 'number' || typeof b.y !== 'number') {
        throw new TypeError("Propiedades x e y deben ser números en ambos objetos");
    }
    
    return {
        x: a.x + b.x,
        y: a.y + b.y
    }
}
module.exports = { sumObjects };