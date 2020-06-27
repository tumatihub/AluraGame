class Sprite extends Objeto{
    constructor(caminhoSprite){
        super();
        this.caminhoSprite = caminhoSprite;
        this.largura = 0;
        this.altura = 0;
    }

    carrega(){
        this.imagem = loadImage(this.caminhoSprite);
    }

    exibe(){
        image(
            this.imagem,
            this.posicao.x,
            this.posicao.y,
            this.largura,
            this.altura
        );
    }

    registra(){
        sprites.registra(this);
    }
}