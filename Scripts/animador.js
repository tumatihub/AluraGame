class Animador {
    constructor(sprite){
        this.sprite = sprite;
        this.estados = {};
        this.estado = null;
        this.tempoAnimacao = 0;
        this.indiceAnimacao = 0;
    }

    anima(){
        if (this.estado == null) return

        this.tempoAnimacao += deltaTime/1000;
        
        if (this.tempoAnimacao >= this.estado.animacoes[this.indiceAnimacao].tempoInicio){
            this.sprite.frameAtual = this.estado.animacoes[this.indiceAnimacao].numFrame;
            if (this.indiceAnimacao < this.estado.animacoes.length - 1){
                this.indiceAnimacao += 1;
            }
        }

        if (this.tempoAnimacao >= this.estado.duracao){
            this.tempoAnimacao = 0;
            this.indiceAnimacao = 0;
        }
    }

    adicionaEstado(nome, duracao){
        this.estados[nome] = {
            "duracao": duracao,
            "animacoes": []
        }
        return this.estados[nome];
    }

    adicionaAnimacao(estado, tempoInicio, numFrame){
        estado.animacoes.push({
            "tempoInicio": tempoInicio,
            "numFrame": numFrame
        })
    }

    mudaEstado(estado){
        this.estado = estado;
        this.tempoAnimacao = 0;
        this.indiceAnimacao = 0;
    }
}