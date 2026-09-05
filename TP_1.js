// Trabajo practico 1: Animación de Sprites
// Ornella Rapisarda 

let fondopri;
let banda;
let opacidad = 0;
let posX = 20;
let posX2 = 330;
let velocidadAni= 5;
let velocidadAni2 = 10;
let velocidadConfetti = 4;
let correrCant = 5;
let cantarCant = 7;
let Olicorre = [];
let Olicanta = [];
let GutsFinal = [];
let cierre = [];
let moverseY= 0;
let preInicio =0;

function preload () {
  fondopri = loadImage ('/assets/fondoprincipal.png'); 
  banda = loadImage ('/assets/bandasonora.png');
  for (let a = 0; a < 5; a++) {
  Olicorre.push (loadImage ( '/assets/correr' +a+ '.png'));
  }
  for (let b = 0; b < 7; b++) {
  Olicanta.push (loadImage ( '/assets/cantar' +b+ '.png'));
  }

GutsFinal.push( loadImage('/assets/confetti.png'));
cierre.push (loadImage ('/assets/final.png'));
}

function setup() {
createCanvas (800, 600); 
preInicio = millis ();
}

function draw() {
 image (fondopri, 0, 0);
     animacionbanda ();
  
  let tiempo = millis () - preInicio; 

  if (tiempo > 2000 && tiempo < 4900) { // MAQUINA DE ESTADOS
     OliviaCorriendo ();
  } else if (tiempo > 4900 && tiempo < 13999) {
Oliviacantando ();
  } else if (tiempo > 14000 && tiempo < 25000) {
  OliviaSeVa ();
  confetti ();
}
if (tiempo > 19000 && tiempo < 25000) {
 image(cierre[0], 300, moverseY, 200, 300);
   if (moverseY < 150) {
  moverseY = moverseY +2;
}
}
}
