//variables globales
var velocidad = 80;
//variable tamaño
var tam = 10;
//rutinas de detección de coliciones
//clase que hereda las demás clases y llega los métodos de tetención de lolliciones
class objeto{
    constructor(){
        this.tam = tam
    }
    choque(obj){
        var difx = Math.abs(this.x, - obj.x);
        var dify = Math.abs(this.y, - obj.y)
        if(difx >= 0 && difx < tam && dify >= 0 && dify < tam){
            return true;
        }else{
            return false;
        }

    }
}
//con extendes digo que es una subclase
class cola extends objeto{
    constructor(x,y){
        super();
        this.x = x;
        this.y = y;
    }
    //método de dibujo
    dibujar(ctx){
        ctx.fillStyle = "#fcbf1e";
        ctx.fillRect(this.x, this.y, this.tam, this.tam)
    }
    setxy(x,y){
        this.x = x;
        this.y = y;
    }
}
//objetos del juego
var cabeza = new cola (20,20)

//variables para lograr el movimiento
//variables booleanas, van a permitir habilitar lo bloquear los ejes
var ejex = true;
var ejey = true;
//variables para darle dirección al movimiento
var xdir = 0;
var ydir = 0;

//funcion para dar movimiento
function movimiento(){
    var nuevax = cabeza.x + xdir;
    var nuevay = cabeza.y + ydir;
    cabeza.setxy(nuevax, nuevay)

}
// función para los controles
function control(event){
    var codtecla = event.keyCode;
    if (ejex){
        //movimiento a la tecla de arriba
        if(codtecla == 38){
            ydir = -tam;
            xdir = 0;
            ejex = false;
            ejey = true;
        }
        //movimiento hacia abajo
        if(codtecla == 40){
            ydir = tam;
            xdir = 0;
            ejex = false;
            ejey = true;
        }
    }
    if(ejey){
        //movimiento hacia la derecha
        if(codtecla == 37){
            ydir = 0;
            xdir = -tam;
            ejex = true;
            ejey = false;
        }
        //movimeinto hacia la izquierda
        if(codtecla == 39){
            ydir = 0;
            xdir = tam;
            ejex = true;
            ejey = false;
        }
    }
}
//motor de juego
//dibujar
function dibujar(){
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    ctx.clearRect(0, 0, canvas.Width, canvas.height)
    cabeza.dibujar(ctx);
}
//llamar las funciones
function animar(){
    dibujar();
    movimiento();
}
//darle función
setInterval("animar()", velocidad)
