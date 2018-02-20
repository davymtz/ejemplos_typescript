// Typescript con POO
interface Cochebase {
	getModelo():string;
	getColor():string;
	getVelocidad():number;
}


class Coche implements Cochebase{
	public color:string;
	public modelo:string;
	public velocidad:number;

	constructor(color:string="BLANCO",modelo:string="Jetta Volswagen 2.5T",velocidad:number=0) {
		this.color = color;
		this.velocidad = velocidad;
		this.modelo = modelo;
	}

	public getColor() {
		return this.color;
	}

	public setColor(color:string) {
		this.color = color;
	}

	public getModelo() {
		return this.modelo;
	}

	public setModelo(modelo:string) {
		this.modelo = modelo;
	}

	public setVelocidad(velocidad:number) {
		this.velocidad = velocidad;
	}

	public getVelocidad():number {
		return this.velocidad;
	}

	public acelerar() {
		this.velocidad++;
	}

	public frenar() {
		this.velocidad--;
	}
}
var coche = new Coche();
coche.setColor("ROJO");
coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log("El color del coche 1 es: "+coche.getColor());
console.log("El modelo del coche 1 es: "+coche.getModelo());
console.log('La velocidad del coche 1 es: '+coche.getVelocidad())
coche.frenar();
console.log("La velocidad del coche 1 actualmente es de: "+coche.getVelocidad());


// coche.setColor("GREEN");
// console.log("El color del coche 2 es: "+coche.getColor());
// coche.setColor("BLUE");
// console.log("El color del coche 2 es: "+coche.getColor());