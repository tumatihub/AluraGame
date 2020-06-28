
const WIDTH = 800;
const HEIGHT = 600;
const FRAME_RATE = 60;
let fonte;
let objetos = new ListaObjetos();
let sprites = new ListaSprites();
let debug = true;

let paralaxe = new Paralaxe();

let pontos = new Pontos();
let jogador = new Jogador();
let geradorInimigos = new GeradorInimigos();


let geleia_teste = new Geleia();
geleia_teste.ativo = true;


function preload() {
  sprites.carrega();
  fonte = loadFont("Fonts/Kenney Future Narrow.ttf")
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  frameRate(FRAME_RATE);

  // Inicia funções do p5
  objetos.inicia();
  sprites.inicia();

  objetos.configura();
  sprites.configura();

  geleia_teste.posicao.x = 0;
  geleia_teste.posicao.y = 0;
  geleia_teste.velocidade = 0;
}

function draw() {
  objetos.atualiza();
  sprites.atualiza();
  sprites.exibe();
  pontos.exibe();
  sprites.debug();
}

function keyReleased() {
  if(keyCode === UP_ARROW){
    jogador.pula();
  }
}