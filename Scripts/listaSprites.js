class ListaSprites extends ListaObjetos {
    
    exibe(){
        this.lista.forEach( (sprite) => {
            sprite.exibe();
        })
    }

    carrega(){
        this.lista.forEach( (sprite) => {
            sprite.carrega();
        })
    }
}