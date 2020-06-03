/*Inicio*/
//se agregaron canvas
window.onload = function () {
	canvas = document.getElementById("miCanvas");
	if (canvas && canvas.getContext) {
		ctx = canvas.getContext("2d");
		if (ctx) {
			//se agregaron imagenes a la funcion
			x = canvas.width / 2;
			if (mensaje("INVADERS"));	
			imgNave = new Image();
			imgOvni = new Image();
			imgOvni.src = "iamgenes/ovni.png";
			imgNave.src = "iamgenes/nave.png";
			imgNave.onload = function () {
				nave = new nave(0);
			}
			//disparos
            imgOvni.onload = function () {
				for (var i = 0; i < 5; i++) {
					for (var j = 0; j < 10; j++) {
						ovnis_array.push(new Enemigo(100 + 40 * j, 30 + 45 * i));
					}
				}
				setTimeout(anima, 1500);
				disparoEnemigo = setTimeout(disparaEnemigo, tiempoDisparo);
			}
		} else {
			alert("Error");
		}
	}
}
/*Listener, Animaciones, correcta funcion de los distintos navegadores*/
window.requestAnimationFrame = (function () {
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		function (callback) { window.setTimeout(callback, 17); }
})();
document.addEventListener("keydown", function (e) {
	teclaPulsada = e.keyCode;
	tecla[e.keyCode] = true;
});
document.addEventListener("keyup", function (e) {
	tecla[e.keyCode] = false;
});
//variables para mover nave,etc
/*Variables*/
var canvas, ctx;
var x = 100;
var y = 100;
var teclaIzquierda = 37;
var teclaDerecha = 39;
var teclaEspacio = 32;
var imgNave, imgOvni;
var municion = 125;
var ultimos = new Array();
var imgAni = 0;
var imgAni2 = 0;
var enemigosVivos = 50;
var tiempoBala = true ;
var teclaPulsada = true;
var tecla = [];
var balas_array = new Array();
var ovnis_array = new Array();
var balasEnemigas_array = new Array();
var endGame = false;
var disparoEnemigo;
var tiempoDisparo = 400;
var puntos = 0;