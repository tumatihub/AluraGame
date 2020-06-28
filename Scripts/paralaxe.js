class Paralaxe extends Objeto {
    constructor(){
        super();
        this.background1 = new Sprite("Sprites/backgroundColorGrass.png", Sprite.camadas.fundo);
        this.background2 = new Sprite("Sprites/backgroundColorGrass.png", Sprite.camadas.fundo);
    }

    configura(){
        this.background1.altura = WIDTH;
        this.background2.altura = WIDTH;
        this.background1.largura = WIDTH;
        this.background2.largura = WIDTH;
        this.background2.posicao.x = this.background2.largura;
        this.bg_velocidade = 100;
    }

    atualiza(){
        this.background1.posicao.x -= this.bg_velocidade * deltaTime/1000;
        if (this.background1.posicao.x < -this.background1.largura){
            this.background1.posicao.x = this.background2.posicao.x + this.background2.largura;
        }
        this.background2.posicao.x -= this.bg_velocidade * deltaTime/1000;
        if (this.background2.posicao.x < -this.background2.largura){
            this.background2.posicao.x = this.background1.posicao.x + this.background1.largura;
        }
    }
}