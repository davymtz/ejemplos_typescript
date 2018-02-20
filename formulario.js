var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Módulos
var Tienda;
(function (Tienda) {
    var Ropa = /** @class */ (function () {
        function Ropa(titulo) {
            alert('Tienda de ropa llamada: ' + titulo);
        }
        return Ropa;
    }());
    Tienda.Ropa = Ropa;
    var Informatica = /** @class */ (function () {
        function Informatica(titulo) {
            alert('Tienda de informatica llamada: ' + titulo);
        }
        return Informatica;
    }());
    Tienda.Informatica = Informatica;
})(Tienda || (Tienda = {}));
var Informatica = Tienda.Informatica;
var classInformatica = new Informatica('David');
// Fin módulos
function arranque(lanzar) {
    return function (target) {
        target.prototype.lanzamiento = function () {
            alert(lanzar);
        };
    };
}
var formulario = /** @class */ (function () {
    function formulario() {
        this.programas = [];
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
    formulario = __decorate([
        arranque("Lanzamiento del curso de NodeJs")
    ], formulario);
    return formulario;
}());
var form = new formulario();
form.mostrarLista();
form.lanzamiento();
var btn = document.getElementById("nombre");
btn.addEventListener("click", function () { form.guardar(); });
