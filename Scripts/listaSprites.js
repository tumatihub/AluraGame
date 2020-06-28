class ListaSprites extends ListaObjetos {
    
    registra(sprite){
        this.lista.push(sprite);
    }

    exibe(){
        this.lista.forEach( (sprite) => {
            if (sprite.ativo === true){
                sprite.exibe();
            }
        })
    }

    carrega(){
        this.lista.forEach( (sprite) => {
            sprite.carrega();
        })
    }

    configura(){
        this.lista.forEach( (sprite) => {
            sprite.configura();
        })
        this.ordenaPorCamadas();
    }

    comparaCamadas(a, b){
        if (a._camada < b._camada) return -1;
        if (a._camada > b._camada) return 1;
        return 0;
    }

    ordenaPorCamadas(){
        this.lista.sort(this.comparaCamadas);
    }
}