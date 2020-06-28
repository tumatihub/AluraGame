class Jogador extends Sprite{
    constructor(){
        super(
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

        this.animador = new Animador(this);
        this.velocidadePuloMin = 500;
        this.velocidadePuloMax = 1000;
        this.velocidadePulo = this.velocidadePuloMin;
        this.estaPulando = false;
        this.gravidade = 1500;
        this.taxaAumentoPulo = 400;
        this.posicaoInicial = null;
    }

    configura(){
        super.configura();

        this.posicaoInicial = createVector(100, 300);
        this.posicao = createVector(this.posicaoInicial.x, this.posicaoInicial.y);
        let estado = this.animador.adicionaEstado("caminha", .5);
        this.animador.adicionaAnimacao(estado, 0, 26);
        this.animador.adicionaAnimacao(estado, 0.25, 34);
        this.animador.mudaEstado(estado);
        estado = this.animador.adicionaEstado("pulando", 1);
        this.animador.adicionaAnimacao(estado, 0, 3);
        estado = this.animador.adicionaEstado("caindo", 1);
        this.animador.adicionaAnimacao(estado, 0, 11);
    }

    atualiza(){
        this.animador.anima();

        this.move();

        if (keyIsDown(UP_ARROW) && !this.estaPulando){
            this.velocidadePulo += this.taxaAumentoPulo * deltaTime/1000;
            
            if (this.velocidadePulo >= this.velocidadePuloMax){
                this.pula();
            }
        }
    }

    pula(){
        if (this.estaPulando) return;

        this.estaPulando = true;
        this.animador.mudaEstado(this.animador.estados.pulando);
    }

    move(){
        if (this.estaPulando){
            this.posicao.y += -this.velocidadePulo * deltaTime/1000
            this.velocidadePulo -= this.gravidade * deltaTime/1000;
            if (this.velocidadePulo < 0){
                this.animador.mudaEstado(this.animador.estados["caindo"]);
            }
            if (this.posicao.y >= this.posicaoInicial.y){
                this.posicao.y = this.posicaoInicial.y;
                this.estaPulando = false;
                this.animador.mudaEstado(this.animador.estados["caminha"]);
                this.velocidadePulo = this.velocidadePuloMin;
            }
        }
    }
}