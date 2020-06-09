//variables globales
var velocidad = 83;
//variable tamaño
var tam = 10;
//rutinas de detección de coliciones
//clase que hereda las demás clases y llega los métodos de tetención de lolliciones
class objeto{
    constructor(){
        this.tam = tam;
       

    }
    choque(obj){
        var difx = Math.abs(this.x, - obj.x);
        var dify = Math.abs(this.y, - obj.y);
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
        this.sig = null;
    }
    //método de dibujo
    dibujar(ctx){
        if (this.sig != null  ){
            this.sig.dibujar(ctx)
        }
        ctx.fillStyle = "#fcbf1e";
        ctx.fillRect(this.x, this.y, this.tam, this.tam);
    }
    setxy(x,y){
        if (this.sig != null){
            this.sig.setxy(this.x, this.y)
        }
        this.x = x;
        this.y = y;
    }
    menter(){
        if (this.sig == null){
            this.sig = new cola(this.x, this.y)
        } else {
            this.sig.menter();
        }
    }
    versiguiente(){
        return this.sig;
    }
}
class eat extends objeto{
    constructor(x,y){
        super();
        this.x = this.generar();
        this.y = this.generar();
    }
    generar(){
        var num = (Math.floor(Math.random() * 59)) * 10;
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
var cabeza = new cola (20,20);
var comida = new eat ();

//variables para lograr el movimiento
//variables booleanas, van a permitir habilitar lo bloquear los ejes
var ejex = true;
var ejey = true;
//variables para darle dirección al movimiento
var xdir = 0;
var ydir = 0;

//funcion para dar movimiento
function movimiento(){
    const nx = cabeza.x + xdir;
    const ny = cabeza.y + ydir;
    cabeza.setxy(nx, ny)

}
// función para los controles
function control(event){
    const codtecla = event.keyCode;
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
//funcion para dar final
function finjuego(){
    xdir = 0;
    ydir = 0;
    ejexv = true;
    ejey = true;
    cabeza = new cola(20,20);
    comida = new eat();
    alert ("Has perdido")
}
//funcion para el choque con el canvas
function choquepared(){
    if (cabeza.x < 0 || cabeza.x > 449 || cabeza.y < 0 || cabeza.y > 449){
        finjuego();
    }

}

//funcion para el choque del cuerpo
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
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0, canvas.clientWidth, canvas.clientHeight);
    cabeza.dibujar(ctx);
    comida.dibujar(ctx);
    
}
//llamar las funciones
function animar(){
    choquecuerpo();
    choquepared();
    dibujar();
    movimiento();
    if(cabeza.choque(eat)){
        eat.colocar();
    }

}


//darle función
setInterval("animar()",velocidad)
//rama nueva

   
