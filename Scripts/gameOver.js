class GameOver extends Object{
    constructor(){
        super();
        this.ativo = false;
    }

    exibe(){
        if (!this.ativo) return;

        textFont(fonte);
        textSize(100);
        fill("#fff");
        stroke("#aaa");
        textAlign(CENTER);
        text("Fim do Jogo", WIDTH/2, 300);
    }

    ativa(){
        this.ativo = true;
    }
}