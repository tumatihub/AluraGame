class Geleia extends Sprite{
    constructor(){
        super(
            "Sprites/slimePurple.png", 
            Sprite.camadas.inimigo,
            64,
            64,
            128,
            128,
            2,
            1,
            2,
            1
        );

        this.animador = new Animador(this);
        this.velocidade = 200;
        this.ativo = false;
        this.colisor = new ColisorRetangulo();
    }

    configura(){
        super.configura();
        this.posicao.y = paralaxe.chaoY - this.altura;
        let estado = this.animador.adicionaEstado("andando", .4);
        this.animador.adicionaAnimacao(estado, .15, 2);
        this.animador.adicionaAnimacao(estado, .35, 1);
        this.animador.mudaEstado(estado);
    }

    atualiza(){
        this.colisor.x = this.posicao.x + 5;
        this.colisor.y = this.posicao.y + 37;
        this.colisor.largura = this.largura -10;
        this.colisor.altura = this.altura -37;

        this.animador.anima();
        this.move();
    }

    move(){
        if (!this.ativo) return;

        this.posicao.x -= this.velocidade * deltaTime/1000;
        

        if (this.posicao.x < -this.largura){
            this.desativa();
            pontos.adicionaPontos(10);
            geradorInimigos.proximaOnda();
        }
    }

    ativa(){
        super.ativa();
        this.posicao.x = geradorInimigos.posicao.x;
    }

    desativa(){
        super.desativa();
        
    }

    debug(){
        this.colisor.exibe();
    }
}