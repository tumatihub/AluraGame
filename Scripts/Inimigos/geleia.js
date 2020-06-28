class Geleia extends Sprite{
    constructor(){
        super(
            "Sprites/slimePurple.png", 
            Sprite.camadas.inimigo,
            64,
            64,
            128,
            128,
            2,
            1,
            2,
            1
        );

        this.animador = new Animador(this);
    }

    configura(){
        super.configura();

        let estado = this.animador.adicionaEstado("andando", .4);
        this.animador.adicionaAnimacao(estado, .15, 2);
        this.animador.adicionaAnimacao(estado, .35, 1);
        this.animador.mudaEstado(estado);
    }

    atualiza(){
        this.animador.anima();
    }
}