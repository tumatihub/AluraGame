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

        this.colisor = new ColisorRetangulo();
        this.morto = false;

        this.pontos = pontos;
    }

    configura(){
        super.configura();

        this.escala = createVector(.8, .8);
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
        estado = this.animador.adicionaEstado("morrendo", 1);
        this.animador.adicionaAnimacao(estado, 0, 3);
    }

    atualiza(){
        this.colisor.x = this.posicao.x + 20;
        this.colisor.y = this.posicao.y + 110;
        this.colisor.largura = this.largura -60;
        this.colisor.altura = this.altura -170;

        this.animador.anima();

        this.move();

        if (keyIsDown(UP_ARROW) && !this.estaPulando){
            this.velocidadePulo += this.taxaAumentoPulo * deltaTime/1000;
            
            if (this.velocidadePulo >= this.velocidadePuloMax){
                this.pula();
            }
        }

        this.testaColisao();
    }

    pula(){
        if (this.estaPulando || this.morto) return;

        this.estaPulando = true;
        this.animador.mudaEstado(this.animador.estados.pulando);
    }

    move(){
        if (this.estaPulando){
            this.posicao.y += -this.velocidadePulo * deltaTime/1000;
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

        if (this.morto){
            this.posicao.y += -this.velocidadePulo * deltaTime/1000;
            this.posicao.x += -this.velocidadePuloMin/5 * deltaTime/1000;
            this.escala = createVector(
                    this.escala.x += 0.2 * deltaTime/1000,
                    this.escala.y += 0.2 * deltaTime/1000
                )
            this.velocidadePulo -= this.gravidade * deltaTime/1000;
            /* if (this.posicao.y >= this.posicaoInicial.y){
                this.posicao.y = this.posicaoInicial.y;
                this.estaPulando = false;
                this.animador.mudaEstado(this.animador.estados["morrendo"]);
                this.velocidadePulo = this.velocidadePuloMin;
            } */
        }
    }
    testaColisao(){
        if (this.morto) return;

        sprites.lista.forEach( (sprite) => {
            if (sprite != this && sprite.ativo && sprite.colisor != null){
                let colidiu = collideRectRect(
                    this.colisor.x,
                    this.colisor.y,
                    this.colisor.largura,
                    this.colisor.altura,
                    sprite.colisor.x,
                    sprite.colisor.y,
                    sprite.colisor.largura,
                    sprite.colisor.altura,
                );
                if (colidiu){
                    this.colisor.colidindo = true;
                    sprite.colisor.colidindo = true;
                    this.morre();
                } else {
                    this.colisor.colidindo = false;
                    sprite.colisor.colidindo = false;
                }
            }
        });
    }

    morre(){
        this.morto = true;
        this.estaPulando = false;
        this.velocidadePulo = this.velocidadePuloMin;
        this.animador.mudaEstado(this.animador.estados["morrendo"]);
        geradorInimigos.ativo = false;
    }

    debug(){
        this.colisor.exibe();
    }
}