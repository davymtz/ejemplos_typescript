var Coche = /** @class */ (function () {
    function Coche(color, modelo, velocidad) {
        if (color === void 0) { color = "BLANCO"; }
        if (modelo === void 0) { modelo = "Jetta Volswagen 2.5T"; }
        if (velocidad === void 0) { velocidad = 0; }
        this.color = color;
        this.velocidad = velocidad;
        this.modelo = modelo;
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    return Coche;
}());
var coche = new Coche();
coche.setColor("ROJO");
coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log("El color del coche 1 es: " + coche.getColor());
console.log("El modelo del coche 1 es: " + coche.getModelo());
console.log('La velocidad del coche 1 es: ' + coche.getVelocidad());
coche.frenar();
console.log("La velocidad del coche 1 actualmente es de: " + coche.getVelocidad());
// coche.setColor("GREEN");
// console.log("El color del coche 2 es: "+coche.getColor());
// coche.setColor("BLUE");
// console.log("El color del coche 2 es: "+coche.getColor());
