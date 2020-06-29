
const WIDTH = 800;
const HEIGHT = 600;
const FRAME_RATE = 60;
let fonte;
let objetos = new ListaObjetos();
let sprites = new ListaSprites();
let debug = false;
let iniciado = false;

let musica;
let puloSFX;
let paralaxe = new Paralaxe();

let pontos = new Pontos();
let jogador = new Jogador();
let camera = new Camera();
let geradorInimigos = new GeradorInimigos();

let barraPulo = new BarraPulo();
let logo = new Logo();
let gameOver = new GameOver();



function preload() {
  sprites.carrega();
  fonte = loadFont("Fonts/Kenney Future Narrow.ttf")
  musica = loadSound("Music/Run Amok.mp3");
  //puloSFX = loadSound("SFX/jump4.wav");
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
  pontos.exibe();
  logo.exibe();
  gameOver.exibe();
  sprites.debug();
}

function keyReleased() {
  if(keyCode === UP_ARROW){
    jogador.pula();
  }
}

function mousePressed() {
  if (iniciado) return;
  userStartAudio();
  musica.loop();
  iniciado = true;
  geradorInimigos.ativa();
  logo.remove();
}