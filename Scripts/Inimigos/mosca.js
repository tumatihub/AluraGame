class Mosca extends Sprite{
    constructor(){
        super(
            "Sprites/fly.png", 
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

        let estado = this.animador.adicionaEstado("voando", .2);
        this.animador.adicionaAnimacao(estado, .1, 2);
        this.animador.adicionaAnimacao(estado, .15, 1);
        this.animador.mudaEstado(estado);
    }

    atualiza(){
        this.animador.anima();
    }
}