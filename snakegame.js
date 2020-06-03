//variables globales
var velocidad = 80;
//variable tamaño
var tam = 10;

//fucion para el dibujo
function dibujar(){
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    ctx.clearRect(0, 0, canvas.Width, canvas.height)
}
//llamar las funciones
function animar(){
    dibujar();
}
//darle función
setInterval("animar()", velocidad)
