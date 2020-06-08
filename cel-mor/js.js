//FUNCIÓN PARA QUE INTERPRETE UNA SEÑAL DEL TECLADO y salte-------------------------
document.addEventListener( 'keydown', function(evento){
    if(evento.keyCode == 32){
        console.log("salta");
    }
});

//variables para las imágenes del juego
var virus, antiv, suelo;
function cargaimagenes(){
    virus = new image();
    antiv = new image();
    suelo = new image();
    
    virus.src = 'covid1.png';
    antiv.src = 'antiv1.png';
    suelo.src = 'suelo.png';
}

//asignación de variables para ciertas funciones
var ancho=700;
var alto=300;
//variables para canvas y para contexto
var canvas, ctx;
//varible canvas obteniendo id canvas de html
function inicializa(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getcontext('2d');
    cargaimagenes();
    
}

//función para borrar CANVAS, la más sencilla, pasando de una variable a otra
function borracanvas(){
    canvas.width= ancho;
    canvas.height= alto;
}

function dibujaantiv(){
    ctx.drawimage(antiv,0,0,60,120,100,100,59,110);
}

//BUCLE para que el juego se repita--------------------------------------------------
//en esta parte, se irá llamando a todas las funciones mientras el juego se repita
var FPS = 10;
//INTERVALO DE TIEMPO y función principal
setInterval(function(){
    principal();
},1000/10);

function principal(){
    borracanvas();
    dibujaantiv();
    
}