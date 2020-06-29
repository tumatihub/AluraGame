class BarraPulo extends Objeto{
    constructor(){
        super();
        this.jogador = jogador;
        this.fundo = new Sprite("Sprites/grey_button02.png");
        this.frente = new Sprite("Sprites/yellow_button05.png");
        this.porcentagem = 0.05;
    }
    
    configura(){
        this.posicao.x = 15;
        this.posicao.y = HEIGHT-45;
        this.fundo.posicao = this.posicao;
        this.frente.posicao = this.posicao;
        this.frente.escala.x = this.porcentagem;
        this.frente.efeitoCamera = 0;
        this.fundo.efeitoCamera = 0;
        this.frente.largura = 110;
        this.frente.altura = 26;
        this.fundo.largura = 110;
        this.fundo.altura = 26;
    }

    atualiza(){
        this.porcentagem = (Math.max(this.jogador.velocidadePulo,this.jogador.velocidadePuloMin)-this.jogador.velocidadePuloMin-1)/(this.jogador.velocidadePuloMax-this.jogador.velocidadePuloMin);
        this.frente.escala.x = this.porcentagem;
    }
}