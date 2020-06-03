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
    constructor(x, y){
        super();
        this.x = x;
        this.y = y;
    }
    //método de dibujo
    dibujar(ctx){
        ctx.fillStyle = "#fcbf1e";
        ctx.fillRect(this.x, this.y, this.tam, this.tam)
    }

}
//objetos del juego
var cabeza = new cola (20,20)

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
}
//darle función
setInterval("animar()", velocidad)
