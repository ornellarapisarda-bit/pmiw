function animacionbanda (){
   if (opacidad < 255) {
 opacidad += 5;
 }
   tint (255, opacidad);
image (banda, 200, 325, 360, 180);
noTint();

}

function calcularFrame (velocidad, cantidad) { // Funcion propia 1 con parametro y retorna valor 
  return floor (frameCount / velocidad) % cantidad; 
}

function OliAnimarYMover (frames, pos, velocidad, cantidad, y, w, h) { // // Funcion propia 2 con parametro y retorna valor
  let frameC = calcularFrame (velocidad, cantidad);
  image (frames [frameC], pos, y, w, h);
  return pos + 1;
}

function OliviaCorriendo (){
 posX = OliAnimarYMover (Olicorre, posX, velocidadAni, correrCant, 300, 180, 225);
}

function Oliviacantando (){
 let frameC = calcularFrame (velocidadAni2, cantarCant);
 image (Olicanta [frameC], 330, 300 , 130, 240);
}

function OliviaSeVa () {
   posX2 = OliAnimarYMover (Olicorre, posX2, velocidadAni, correrCant, 300, 180, 225);
}
function confetti () { // Efecto parallax
  let posy = (frameCount * velocidadConfetti) % 600;
   image(GutsFinal[0], 0, posy, 800, 600);      
  image(GutsFinal[0], 0, posy - 600, 800, 600);
}

function reinicarAnimaciones(){
 posX = 20;
  posX2 = 330;
  moverseY = 0;
  opacidad = 0;
  preInicio = millis();
}
function keyPressed () {
  if (key === 'r' || key === 'R') {
    reinicarAnimaciones ();
  }
}
