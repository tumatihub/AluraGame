
const WIDTH = 800;
const HEIGHT = 600;
const FRAME_RATE = 60;
let objetos = new ListaObjetos();
let sprites = new ListaSprites();

let paralaxe = new Paralaxe();

let jogador = new Jogador();

function preload() {
  sprites.carrega();
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  frameRate(FRAME_RATE);

  // Inicia funções do p5
  objetos.inicia();
  sprites.inicia();

  objetos.configura();
  sprites.configura();
}

function draw() {
  objetos.atualiza();
  sprites.atualiza();
  sprites.exibe();
}

function keyReleased() {
  if(keyCode === UP_ARROW){
    jogador.pula();
  }
}