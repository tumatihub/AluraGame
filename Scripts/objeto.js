class Objeto{
    constructor(){
        this.registra();
    }

    inicia(){
        //Funções do p5 que precisam ser executadas no setup
        this.posicao = createVector();
        console.log("Fim inicia");
        console.log(this.constructor.name + ' ' + this.posicao.x);
    }

    configura(){

    }

    atualiza(){

    }

    registra(){
        objetos.registra(this);
    }
}