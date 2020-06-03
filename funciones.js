
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
//funciones para navegadores
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
//Objetos balas y nave
function Bala(x, y, w) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.dibuja = function () {
		ctx.save();
		ctx.fillStyle = "green";
		ctx.fillRect(this.x, this.y, this.w, this.w);
		this.y = this.y - 6;
		ctx.restore();
	};
	this.dispara = function () {
		ctx.save();
		ctx.fillStyle = "yellow";
		ctx.fillRect(this.x, this.y, this.w, this.w);
		this.y = this.y + 4;
		ctx.restore();
	};
}
//Nave y animaciones
function nave(x) {
	this.x = x;
	this.y = 450;
	this.w = 30;
	this.h = 15;
	this.dibuja = function (x) {
		this.x = x;
		if(imgAni2 < 5){
			ctx.drawImage(imgNave,0   , 0   , 32  , 32  , this.x, this.y, 35  , 35);
			imgAni2 = imgAni2 + 1;
			imgAni = imgAni + 1;
			checarBalas();
//balas
		} else if(imgAni2 < 10) {
			ctx.drawImage(imgNave,32  , 0   , 32  , 32  , this.x, this.y, 35  , 35);
			imgAni2 = imgAni2 + 1;
			imgAni = imgAni + 1;
		} else{
			ctx.drawImage(imgNave,32  , 0   , 32  , 32  , this.x, this.y, 35  , 35);
			imgAni2 = 0;
		}
		
	};
}
/*Objetos de Enemigos y animaciones*/
function Enemigo(x, y) {
	this.x = x;
	this.y = y;
	this.w = 35;
	this.veces = 0;
	this.dx = 5;
	this.ciclos = 0;
	this.num = 14;
	this.figura = true;
	this.vive = true;
	this.dibuja = function () {
		//Retraso
		if (this.ciclos > 20) {
			//saltitos
			if (this.veces > this.num) {
				this.dx *= -1;
				this.veces = 0;
				this.num = 28;
				this.y += 40;
				this.dx = (this.dx > 0) ? this.dx++ : this.dx--;
			} else {
				this.x += this.dx;
			}
			this.veces++;
			this.ciclos = 0;
			this.figura = !this.figura;
		} else {
			this.ciclos++;
		}
		if (this.vive) {
			if (imgAni < 4) {
				ctx.drawImage(imgOvni, 0   , 0   , 32  , 32  , this.x, this.y, 35  , 35);
				//           (imgFile, xini, yini, wimg, himg, xpos  , ypos  , wrez, hrez)
			} else if(imgAni < 8) {
				ctx.drawImage(imgOvni, 32, 0, 32, 32, this.x, this.y, 35, 35);
			} else if(imgAni < 12) {
				ctx.drawImage(imgOvni, 64, 0, 32, 32, this.x, this.y, 35, 35);
			} else if(imgAni > 11) {
				ctx.drawImage(imgOvni, 0, 0, 32, 32, this.x, this.y, 35, 35);
				imgAni = 0;
			}
		} else {
			ctx.fillStyle = "black";
			ctx.fillRect(this.x, this.y, 35, 30);
		}

	};
}
//canvas
function anima() {
	if (endGame == false) {
		requestAnimationFrame(anima);
		verifica();
		pinta();
		colisiones();
	}
}
function mensaje(cadena) {
	var lon = (canvas.width - (50 * cadena.length)) / 2;
	ctx.fillStyle = "white";
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.font = "bold 75px Arial";
	ctx.fillText(cadena, lon, 220);
}

