
class Sprite extends Objeto{
    constructor(caminhoSprite, camada){
        super();
        this.caminhoSprite = caminhoSprite;
        this.largura = 0;
        this.altura = 0;
        this._camada = camada;
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

    mudaCamada(camada){
        this._camada = camada;
        sprites.ordenaPorCamadas();
    }
}

Sprite.camadas = {
    "fundoDistante": 7,
    "fundo": 8,
    "padrao": 9,
    "jogador": 10,
    "frente": 11
}