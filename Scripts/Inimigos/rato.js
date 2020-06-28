class Rato extends Sprite{
    constructor(){
        super(
            "Sprites/mouse.png", 
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
        this.animador.adicionaAnimacao(estado, .2, 2);
        this.animador.adicionaAnimacao(estado, .3, 1);
        this.animador.mudaEstado(estado);
    }

    atualiza(){
        this.animador.anima();
    }
}