class GeradorInimigos extends Objeto{
    constructor(){
        super();

        this.gruposInimigos = {
            "geleia": {
                "grupo": new Geleia(),
                "nivel": 1
            },
            "mosca": {
                "grupo": new Mosca(),
                "nivel": 1
            },
        }
        this.opcoes = ["geleia", "mosca"];

        this.intervalo = 10;
        this.contagem = 0;
        this.grupoAtual = null;
        this.ativo = false;
    }

    configura() {
        this.posicao.x = WIDTH + 100;
        
    }

    atualiza(){
    }

    ativa(){
        this.ativo = true;
        this.proximaOnda();
    }

    desativa(){
        this.ativo = false;
    }

    proximaOnda(){
        if(!this.ativo) return;

        this.grupoAtual = this.escolheGrupo();
        this.grupoAtual.grupo.ativa();
    }

    escolheGrupo(){
        let indice = parseInt(random(0, this.opcoes.length));
        return this.gruposInimigos[this.opcoes[indice]];
    }

}