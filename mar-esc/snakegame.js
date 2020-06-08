//una variable declarada afuera de una función es una variable global
//variables globales
const velocidad = 80;
//variable tamaño
const tam = 10;

//rutinas de detección de coliciones
//clase que hereda las demás clases y llega los métodos de tetención de lolliciones
class objeto{
    constructor(){
        this.tam = tam;
    }
    choque(obj){
        const difx = Math.abs(this.x, - obj.x);
        const dify = Math.abs(this.y, - obj.y);
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
        this.siguiente = null;

    }
    //método de dibujo
    //siguiente, para que los cuadritos sigan a la cabeza
    dibujar(ctx){
        if (this.siguiente  = null){
            this.siguiente.dibujar(ctx);
        }
        ctx.fillStyle = "#fcbf1e";
        ctx.fillRect(this.x, this.y, this.tam, this.tam);
    }
    setxy(x,y){
        if (this.siquiente  = null){
            this.siguiente.setxy(this.x, this.y);
        }
        this.x = x;
        this.y = y;
    }
    meter(){
        if (this.siguiente == null){
            this.siguiente = new cola (this.x, this.y)
        } else {
            this.siguiente.meter();
        }
    }
    versiguiente(){
        return this.siguiente;
    }
}
class comida extends objeto{
    constructor(){
        super();
        this.x = this.generar();
        this.y = this.generar();
    }
    generar(){
        const num = (Math.floor(Math.random() * 59)) * 10;
        return num;
    }
    colocar(){
        this.x = this.generar();
        this.y = this.generar();
    }
    dibujar(ctx){
        ctx.fillStyle = "#ffffff"
        ctx.fillRect(this.x, this.y, this.tam, this.tam);
    }

}
//objetos del juego
const cabeza = new cola (20,20);
const food = new comida ();

//variables para lograr el movimiento
//variables booleanas, van a permitir habilitar lo bloquear los ejes
var ejex = true;
var ejey = true;
//variables para darle dirección al movimiento
var xdir = 0;
var ydir = 0;

//funcion para dar movimiento
function movimiento(){
    var nx = cabeza.x + xdir;
    var ny = cabeza.y + ydir;
    cabeza.setxy(nx, ny)

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
            ejey = false;
            ejex = true;
        }
        //movimeinto hacia la izquierda
        if(codtecla == 39){
            ydir = 0;
            xdir = tam;
            ejey = false;
            ejex = true; 
        }
    }
}
function finjuego(){
    xdir = 0;
    ydir = 0;
    ejexv = true;
    ejey = true;
    cabeza = new cola(20,20);
    food = new comida();
    alert ("Has perdido")
}

function choquecuerpo(){
    var temp = null;
    try{
        temp = cabeza.versiguiente().versiguiente(); 

    }catch(error ){
        temp = null;
    }
    while (temp  = null){
        if (cabeza.choque(temp)){
            //fin de juego
            finjuego();
        } else {
            temp = temp.versiguiente();
        }

    }
}

//motor de juego
//dibujar
function dibujar(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0,0, canvas.clientWidth, canvas.clientHeight);
    cabeza.dibujar(ctx);
    food.dibujar(ctx);
    
}
//llamar las funciones
function animar(){
    choquecuerpo();
    dibujar();
    movimiento();
    //función para que desaparezca la comida
    if (cabeza.choque(comida)){
        food.colocar();
        cabeza.meter();

    }

}
//darle función
setInterval("animar()", velocidad);
//sdsfsdfdfdfd
