//variables globales
var velocidad = 80;
//variable tamaño
var tam = 10;

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
