class Pontos extends Objeto{
    constructor(){
        super();
        this.fonte = fonte;
        this.pontos = 0;
        this.tamanhoMax = 60;
        this.tamanhoMin = 50;
        this.tamanho = this.tamanhoMin;
        this.pontuando = false;
    }

    atualiza(){
        if (!this.pontuando) return;
        this.tamanho -= 10 * deltaTime/1000;
        if (this.tamanho <= this.tamanhoMin){
            this.tamanho = this.tamanhoMin;
            this.pontuando = false;
        }

    }

    exibe(){
        textAlign(RIGHT);
        fill("red");
        textSize(this.tamanho);
        noStroke();
        textFont(fonte);
        text(this.pontos, WIDTH-15, 50);
    }

    adicionaPontos(pontos){
        if (jogador.morto) return;
        
        this.tamanho = this.tamanhoMax;
        this.pontuando = true;
        this.pontos += pontos;
    }
}