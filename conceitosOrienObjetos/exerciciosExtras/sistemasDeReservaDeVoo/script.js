/*
Sistema de Reservas de Voo
Crie uma classe chamada "Voo" que representa um voo em um sistema de reservas de voo.

A classe deve ter os seguintes atributos:

codigoVoo: representando o código único do voo (string ou número).

origem: representando a cidade de origem do voo (string).

destino: representando a cidade de destino do voo (string).

assentosDisponiveis: representando a quantidade de assentos disponíveis no voo (número).

A classe deve ter os seguintes métodos:

reservarAssento(): verifica se há assentos disponíveis no voo e, se houver, decrementa a quantidade de assentos disponíveis em um.

consultarAssentosDisponiveis(): retorna a quantidade de assentos disponíveis no voo.
*/

class Voo{
    constructor(codigoVoo, origem, destino, assentosDisponiveis){
        this.codigoVoo = codigoVoo;
        this.origem = origem;
        this.destino = destino;
        this.assentosDisponiveis = assentosDisponiveis;
    }

    reservarAssento(){
        if(this.assentosDisponiveis > 0){
            this.assentosDisponiveis--;
        }else{
            console.log("Não há assentos disponíveis");
        }
    }
    consultarAssentosDisponiveis(){
        return this.assentosDisponiveis;

    }
}
let novoVoo = new Voo(123, "São Paulo", "Rio de Janeiro", 100);
novoVoo.reservarAssento();
console.log(novoVoo.consultarAssentosDisponiveis());