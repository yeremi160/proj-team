//variables globales
var velocidad = 80;
//variable tamaño
var tam = 13;
//rutinas de detección de coliciones
//clase que hereda las demás clases y llega los métodos de tetención de lolliciones
class objeto {
	constructor(){
		this.tam = tam;
	}
	choque(obj){
		var difx = Math.abs(this.x - obj.x);
		var dify = Math.abs(this.y - obj.y);
		if(difx >= 0 && difx < tam && dify >= 0 && dify < tam){
			return true;
		} else {
			return false;
		}
	}
}
// dibujo de la cabeza de la serpiente (cuadrito)
// con extends declaro que es una subclase
class Cola extends objeto {
	constructor(x,y){
		super();
		this.x = x;
		this.y = y;
		this.sig = null;
    }
    // método de dibujo
    //siguiente, para indicar que los cuadritos sigan a la cabeza
	dibujar(ctx){
		if(this.sig != null){
			this.sig.dibujar(ctx);
		}
		ctx.fillStyle = "#fcbf1e";
		ctx.fillRect(this.x, this.y, this.tam, this.tam);
	}
	setxy(x,y){
		if(this.sig != null){
			this.sig.setxy(this.x, this.y);
		}
		this.x = x;
		this.y = y;
	}
	met(){
		if(this.sig == null){
			this.sig = new Cola(this.x, this.y);
		} else {
			this.sig.met();
		}
	}
	verSiguiente(){
		return this.sig;
	}
}
//dibujo de la comida
class Comida extends objeto {
	constructor(){
		super();
		this.x = this.generar();
		this.y = this.generar();
	}
	generar(){
		var num = (Math.floor(Math.random() * 59))*5;
		return num;
	}
	colocar(){
		this.x = this.generar();
		this.y = this.generar();
	}
	dibujar(ctx){
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(this.x, this.y, this.tam, this.tam);
	}
}
//Objetos del juego
var cabeza = new Cola(0,0);
var comida = new Comida();

//variables para lograr el movimiento
//variables booleanas, van a permitir habilitar o bloquear los ejes x, y
var ejex = true;
var ejey = true;
// variables para dar dirección al movimiento
var xdir = 0;
var ydir = 0;

//función para dar movimiento
function movimiento(){
	var nx = cabeza.x+xdir;
	var ny = cabeza.y+ydir;
	cabeza.setxy(nx,ny);
}
//función para los controles
function control(event){
	var cod = event.keyCode;
	if(ejex){
        //movimiento a la tecla de arriba
		if(cod == 38){
			ydir = -tam;
			xdir = 0;
			ejex = false;
			ejey = true;
        }
        //movimiento a la tecla de abajo
		if(cod == 40){
			ydir = tam;
			xdir = 0;
			ejex = false;
			ejey = true;
		}
	}
	if(ejey){
        //movimiento a la tecla de la derecha
		if(cod == 37){
			ydir = 0;
			xdir = -tam;
			ejey = false;
			ejex = true;
        }
        //movimiento a la tecla de la izquierda
		if(cod == 39){
			ydir = 0;
			xdir = tam;
			ejey = false;
			ejex = true;
		}
	}
}
// función para darle final al juego
function findeJuego(){
	xdir = 0;
	ydir = 0;
	ejex = true;
	ejey = true;
	cabeza = new Cola(0,0);
	comida = new Comida();
	alert("¡has perdido!");
}
//función para el choque con el canvas
function choquepared(){
	if(cabeza.x < 0 || cabeza.x > 449 || cabeza.y < 0 || cabeza.y > 449){
		findeJuego();
	}
}
//función para el choque del cuerpo de la serpiente
function choquecuerpo(){
	var temp = null;
	try{
		temp = cabeza.verSiguiente().verSiguiente();
	}catch(err){
		temp = null;
	}
	while(temp != null){
		if(cabeza.choque(temp)){
			//fin de juego
			findeJuego();
		} else {
			temp = temp.verSiguiente();
		}
	}
}
//motor de juego
//dibujar la base
function dibujar(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0,0, canvas.width, canvas.height);
//crear los dibujos
	cabeza.dibujar(ctx);
	comida.dibujar(ctx);
}
// llamar a todas las funciones
function animar(){
	choquecuerpo();
	choquepared();
	dibujar();
	movimiento();
	if(cabeza.choque(comida)){
		comida.colocar();
		cabeza.met();
	}
}
setInterval("animar()", velocidad);


