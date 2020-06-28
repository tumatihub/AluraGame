class ColisorRetangulo{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.largura;
        this.altura;
        this.colidindo = false;
    }

    exibe(){
        noFill();
        if (this.colidindo){
            stroke("red");
        } else {
            stroke("green");
        }
        rect(this.x, this.y, this.largura, this.altura);
    }
}