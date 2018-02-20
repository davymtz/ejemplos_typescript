class formulario {
	public programas:Array<string>;

	constructor() {
		this.programas = ['PHP'];
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

var btn = document.getElementById("nombre");
btn.addEventListener("click",function (){ form.guardar() });



