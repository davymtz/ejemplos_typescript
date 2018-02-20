var formulario = /** @class */ (function () {
    function formulario() {
        this.programas = ['PHP'];
    }
    formulario.prototype.guardar = function () {
        var inputValor = document.getElementById("input");
        this.programas.push(inputValor.value.toString());
        inputValor.value = "";
        this.mostrarLista();
    };
    formulario.prototype.mostrarLista = function () {
        var resultList = "";
        this.programas.forEach(function (e) {
            resultList += "<li>" + e + "</li>";
            var listado = document.getElementById("listado_mostrar");
            listado.innerHTML = resultList;
        });
    };
    return formulario;
}());
var form = new formulario();
form.mostrarLista();
var btn = document.getElementById("nombre");
btn.addEventListener("click", function () { form.guardar(); });
