var context= new AudioContext();
//FUNCIÓN DE FRECUENCIA CON SONIDOS INCLUÍDOS EN JAVA
function notamusical(frecuencia){
    var x=context.createOscillator();
    y= context.createGain();
    x.connect(y);
    x.type="sawtooth";
    x.frequency.value=frecuencia;
    y.connect(context.destination);
    x.start(0);
    y.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +1.5);

}
