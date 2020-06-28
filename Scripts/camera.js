class Camera extends Objeto{
    constructor(){
        super();
        this.alvo = jogador;
        this.velocidade = 100;
    }

    atualiza(){
        this.move();
    }

    move(){
        if (this.alvo.posicao.y <= 150 || this.alvo.posicao.y >= 300) return;
        this.posicao.y = this.alvo.posicao.y - this.alvo.posicaoInicial.y;
    }

}