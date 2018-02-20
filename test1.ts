function holaMundo(nombre:string){
	return "Hola Mundo!! Soy "+nombre;
}
let nombre = "David Martinez";
var resultado = holaMundo(nombre);
var etiqueta = <HTMLElement>document.getElementById('container');
etiqueta.innerHTML = resultado;

// Variables y tipos de datos
var nombre:string = "David Martinez";
var edad:number = 26;
var programador:boolean = true;
var lenguajes:Array<string> = ["PHP","JavaScript","CSS3"];

etiqueta.innerHTML = nombre+" - "+edad