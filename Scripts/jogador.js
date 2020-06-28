class Jogador extends Sprite{
    constructor(){
        super(
            "Sprites/spritesheet_players.png", 
            Sprite.camadas.jogador,
            128,
            256,
            128,
            256,
            64,
            3,
            8,
            8
        );

        this.animador = new Animador(this);
    }

    configura(){
        super.configura();

        let estado = this.animador.adicionaEstado("caminha", .5);
        this.animador.adicionaAnimacao(estado, 0, 13);
        this.animador.adicionaAnimacao(estado, 0.25, 21);
        this.animador.mudaEstado(estado);
    }

    atualiza(){
        this.animador.anima();
    }
}