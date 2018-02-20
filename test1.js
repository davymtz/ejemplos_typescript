function holaMundo(nombre) {
    return "Hola Mundo!! Soy " + nombre;
}
var nombre = "David Martinez";
var resultado = holaMundo(nombre);
var etiqueta = document.getElementById('container');
etiqueta.innerHTML = resultado;
// Variables y tipos de datos
var nombre = "David Martinez";
var edad = 26;
var programador = true;
var lenguajes = ["PHP", "JavaScript", "CSS3"];
etiqueta.innerHTML = nombre + " - " + edad;
