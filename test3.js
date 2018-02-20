var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Programa = /** @class */ (function () {
    function Programa() {
    }
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    return Programa;
}());
var Editorvideo = /** @class */ (function (_super) {
    __extends(Editorvideo, _super);
    function Editorvideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Editorvideo.prototype.setTimeLine = function (timeline) {
        this.timeline = timeline;
    };
    Editorvideo.prototype.getTimeLine = function () {
        return this.timeline;
    };
    return Editorvideo;
}(Programa));
var editor = new Editorvideo();
editor.setNombre("Camtasia Studio");
editor.setVersion(8);
editor.setTimeLine(4000);
console.log("El editor se llama: " + editor.getNombre());
console.log("El editor es version: " + editor.getVersion() + " y tiene un timeline de: " + editor.getTimeLine());
