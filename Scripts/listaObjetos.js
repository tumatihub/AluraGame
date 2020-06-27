class ListaObjetos {
    constructor(){
        this.lista = []
    }

    registra(objeto){
        this.lista.push(objeto);
    }

    inicia(){
        this.lista.forEach( (objeto) => {
            objeto.inicia();
        })
    }

    configura(){
        this.lista.forEach( (objeto) => {
            objeto.configura();
        })
    }

    atualiza(){
        this.lista.forEach( (objeto) => {
            objeto.atualiza();
        })
    }
}