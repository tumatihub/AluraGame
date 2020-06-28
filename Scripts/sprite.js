
class Sprite extends Objeto{
    constructor(
            caminhoSprite,
            camada,
            largura = null,
            altura = null,
            larguraFrame = null,
            alturaFrame = null,
            numFrames = 1,
            frameAtual = 1,
            framesPorLinha = 1,
            framesPorColuna = 1,
        ){
        super();
        this.caminhoSprite = caminhoSprite;
        this.largura = largura;
        this.altura = altura;
        this.posicaoFrameX = 0;
        this.posicaoFrameY = 0;
        this.larguraFrame = larguraFrame;
        this.alturaFrame = alturaFrame;
        this.numFrames = numFrames;
        this.frameAtual = frameAtual;
        this.framesPorLinha = framesPorLinha;
        this.framesPorColuna = framesPorColuna;
        this.matrizDeFrames = [];
        this._camada = camada;
    }
    
    carrega(){
        this.imagem = loadImage(this.caminhoSprite);
    }
    
    configura(){
        let x = this.posicaoFrameX;
        let y = this.posicaoFrameY;
        for (let l = 1; l <= this.framesPorColuna; l++){
            for (let c = 1; c <= this.framesPorLinha; c++){
                this.matrizDeFrames.push({
                    "x": x,
                    "y": y
                });
                x += this.larguraFrame;
            }
            x = 0;
            y += this.alturaFrame;
        }
    }

    exibe(){
        this.posicaoFrameX = this.matrizDeFrames[this.frameAtual-1].x;
        this.posicaoFrameY = this.matrizDeFrames[this.frameAtual-1].y;
        image(
            this.imagem,
            this.posicao.x,
            this.posicao.y,
            this.largura * this.escala.x,
            this.altura * this.escala.y,
            this.posicaoFrameX,
            this.posicaoFrameY,
            this.larguraFrame,
            this.alturaFrame
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
    "inimigo": 10,
    "jogador": 11,
    "frente": 12
}