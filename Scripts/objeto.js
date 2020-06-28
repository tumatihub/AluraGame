class Objeto{
    constructor(){
        this.registra();
    }

    inicia(){
        //Funções do p5 que precisam ser executadas no setup
        this.posicao = createVector();
        this.escala = createVector(1, 1);
    }

    configura(){

    }

    atualiza(){

    }

    registra(){
        objetos.registra(this);
    }
}