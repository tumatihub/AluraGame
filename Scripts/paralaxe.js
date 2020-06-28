class Paralaxe extends Objeto {
    constructor(){
        super();
        this.background1 = new Sprite("Sprites/backgroundColorGrass.png", Sprite.camadas.fundo);
        this.background2 = new Sprite("Sprites/backgroundColorGrass.png", Sprite.camadas.fundo);

        this.chao1 = new Sprite("Sprites/ground.png", Sprite.camadas.padrao);
        this.chao2 = new Sprite("Sprites/ground.png", Sprite.camadas.padrao);
        this.chaoY = 450;
    }

    configura(){
        this.background1.altura = 1024;
        this.background1.posicao.y = -200;
        this.background2.posicao.y = -200;
        this.background1.efeitoCamera = .5;
        this.background2.altura = 1024;
        this.background2.efeitoCamera = .5;
        this.background1.largura = 1024;
        this.background2.largura = 1024;
        this.background2.posicao.x = this.background2.largura;
        this.bg_velocidade = 100;

        this.chao1.altura = 640;
        this.chao1.largura = 1024;
        this.chao2.altura = 640;
        this.chao2.largura = 1024;
        this.chao2.posicao.x = this.chao2.largura;
        this.chao1.posicao.y = this.chaoY;
        this.chao2.posicao.y = this.chaoY;
    }

    atualiza(){
        this.moveParalaxe(this.background1, this.background2, this.bg_velocidade * .5);
        this.moveParalaxe(this.chao1, this.chao2, this.bg_velocidade)
    }

    moveParalaxe(fundo1, fundo2, velocidade){
        fundo1.posicao.x -= velocidade * deltaTime/1000;
        if (fundo1.posicao.x < -fundo1.largura){
            fundo1.posicao.x = fundo2.posicao.x + fundo2.largura;
        }
        fundo2.posicao.x -= velocidade * deltaTime/1000;
        if (fundo2.posicao.x < -fundo2.largura){
            fundo2.posicao.x = fundo1.posicao.x + fundo1.largura;
        }
    }
}