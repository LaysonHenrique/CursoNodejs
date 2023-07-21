/*
Crie uma classe chamada "Retangulo" que representa um retângulo.
*/

class Retangulo{
    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    }
    calcularArea(altura, largura){
        if(altura > 0 && largura > 0){
            return this.calcularArea = altura * largura;
        }
    }
    calcularPerimetro(altura, largura){
        if(altura > 0 && largura > 0){
            return this.calcularPerimetro = (2*(altura + largura));
        }

    }
}
let retangulo = new Retangulo(10, 20);

console.log(retangulo);
console.log(retangulo.calcularArea(10, 20));