// Módulos
module Tienda {
	export class Ropa {
		constructor(titulo:string) {
			alert('Tienda de ropa llamada: '+titulo);
		}
	}

	export class Informatica {
		constructor(titulo:string) {
			alert('Tienda de informatica llamada: '+titulo)
		}
	}
}

import Informatica = Tienda.Informatica;
let classInformatica = new Informatica('David');
// Fin módulos

// Decorators
function arranque(lanzar:string) {
    return function(target: Function) {
        target.prototype.lanzamiento = function():void {
            alert(lanzar);
        }
 
    }
}
// Decorar en la clase formulario la funcion arranque con el método 'lanzamiento'
@arranque("Lanzamiento del curso de NodeJs")
// Fin decorators
class formulario {
	public programas:Array<string>;

	constructor() {
		this.programas = [];
	}
	public guardar() {
		var inputValor = (<HTMLInputElement>document.getElementById("input"));
		this.programas.push(inputValor.value.toString());
		inputValor.value = "";
		this.mostrarLista();
	}
	public mostrarLista() {
		var resultList = "";
		this.programas.forEach((e) => {
			resultList += "<li>"+e+"</li>";
			var listado = document.getElementById("listado_mostrar");
			listado.innerHTML = resultList;
		});
	}
}
var form = new formulario();
form.mostrarLista();
form.lanzamiento(); // El decorado de la clase formulario con la función 'arranque' hace que agregue la función 'lanzamiento' en la misma clase.

var btn = document.getElementById("nombre");
btn.addEventListener("click",function (){ form.guardar() });



