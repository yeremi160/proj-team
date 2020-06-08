//FUNCIÓN PARA QUE INTERPRETE UNA SEÑAL DEL TECLADO y salte-------------------------
document.addEventListener('keydown', funcion(evento)
{
    if(evento.keycode == 32){
        console.log("salta");
    }
});


//FIN DE FUNCION SALTAR -------------------------------------------------
//variables para las imágenes del juego
var virus, antiv, suelo, nube;
//funcion para llamar a las imagenes
function cargaimagenes(){
    virus = new image();
    antiv = new image();
    suelo = new image();
    nube = new image();
}

//asignación de variables para ciertas funciones
var ancho=700;
var alto=300;
//variables para canvas y para contexto
var canvas, ctx;

function inicializa(){
    //varible canvas obteniendo id canvas de html
    canvas = document.getElementById('canvas');
    ctx = canvas.getcontext('2d');
    cargaimagenes()
}

//función para borrar CANVAS, la más sencilla, pasando de una variable a otra
function borracanvas(){
    canvas.width = ancho;
    canvas.height =alto;
}






//BUCLE para que el juego se repita--------------------------------------------------
var FPS = 10;
//INTERVALO DE TIEMPO y función principal
setInterval(fun)









//PRIMERAS EDICIONES borrar de último o dejar, dependiendo... O.O   O.O   O.O   O.O 
const canvas = document.getElementById("juego");
const context = canvas.getcontext("2d");
context.scale(20, 20);

//color y tamaño de canvas 0.0   0.0   0.0   0.0   0.0   0.0   0.0   0.0 

context.fillStyle = "#000";
context.fillRect(0,0, canvas.width, canvas.height);
