class Paralaxe extends Objeto {
    constructor(){
        super();
        this.background1 = new Sprite("Sprites/backgroundColorGrass.png");
        this.background2 = new Sprite("Sprites/backgroundColorGrass.png");
    }

    configura(){
        console.log("Inicio configura");
        this.background1.altura = WIDTH;
        this.background2.altura = WIDTH;
        this.background1.largura = WIDTH;
        this.background2.largura = WIDTH;
        this.background2.posicao.x = this.background2.largura;
        this.bg_velocidade = .5;
        console.log("Fim configura");
    }

    atualiza(){
        this.background1.posicao.x -= this.bg_velocidade * deltaTime;
        if (this.background1.posicao.x < -this.background1.largura){
            this.background1.posicao.x = this.background1.largura;
        }
        this.background2.posicao.x -= this.bg_velocidade * deltaTime;
        if (this.background2.posicao.x < -this.background2.largura){
            this.background2.posicao.x = this.background2.largura;
        }
    }
}