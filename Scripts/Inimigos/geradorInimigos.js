class GeradorInimigos extends Objeto{
    constructor(){
        super();

        this.gruposInimigos = {
            "geleia": {
                "grupo": new Geleia(),
                "nivel": 1
            }
        }

        this.intervalo = 10;
        this.contagem = 0;
        this.grupoAtual = null;
    }

    configura() {
        this.posicao.x = WIDTH + 100;
    }

    atualiza(){
        this.contagem += deltaTime/1000;
        if (this.contagem >= this.intervalo){
            this.grupoAtual = this.escolheGrupo();
            this.grupoAtual.grupo.ativa();
            this.contagem = 0;
        }
    }

    escolheGrupo(){
        return this.gruposInimigos.geleia;
    }

}