
const WIDTH = 800;
const HEIGHT = 600;
const FRAME_RATE = 60;
let objetos = new ListaObjetos();
let sprites = new ListaSprites();
let jogador = new Sprite(
  "Sprites/spritesheet_players.png", 
  Sprite.camadas.jogador,
  128,
  256,
  128,
  256,
  64,
  3,
  8,
  8
);

let paralaxe = new Paralaxe();

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