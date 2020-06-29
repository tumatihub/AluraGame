class Logo extends Objeto{
    constructor(){
        super();
        this.logo = new Sprite("Sprites/gamedev-logo-png.png");
        this.ativo = true;
    }

    configura(){
        this.logo.escala = createVector(.4, .4);
        this.logo.largura = 566;
        this.logo.altura = 530;
        this.logo.posicao.x = 450;
        this.logo.posicao.y = 90;
    }

    exibe(){
        if (!this.ativo) return;

        textFont(fonte);
        textSize(100);
        fill("#fff");
        stroke("#aaa");
        textAlign(RIGHT);
        text("Alura", WIDTH/2, 150);
        text("Game", WIDTH/2, 250);
        textAlign(CENTER);
        textSize(50);
        text("Clique para jogar", WIDTH/2, 550);
    }

    remove(){
        this.logo.desativa();
        this.ativo = false;
    }
}