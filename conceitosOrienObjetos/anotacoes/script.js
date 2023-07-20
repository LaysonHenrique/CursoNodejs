/*
ANOTAÇÕES SOBRE CONCEITOS DE ORIENTAÇÃO A OBJETOS.

As propriedades serve como funções e chamamos os metodos como função.
ex.
let carro = {
    portas: 4,
    janelas: 6,
}
console.log(carro.portas);


***PROTOTYPE***
Prototype é um objeto que contém propriedades e métodos que podem ser acessados por outros objetos.
EX.

let pessoa = _{
    maos: 2,
}
console.log(Object.getPrototypeOf(pessoa)); 
console.log(Object.getPrototypeOf(pessoa) === Object.prototype); // true

Obs: quando criamos um objeto que referencia outro objeto, o prototype do objeto sera o objeto referenciado, mas herda as propriedades do Object.prototype.
ex.

let pessoa = {
    maos: 2,
}
let pessoaNova = Object.create(pessoa);

console.log(getPrototypeOf(pessoaNova)); // {maos: 2}

****classes****
Classes são modelos de objetos, a partir delas podemos gerar quantos objetos quisermos.
EX.

let cachorro = {
    raca: '',
    uivar: function(){
        console.log('Auuuuuuu');
    
    },
}

let poodle = Object.create(cachorro);
poodle.raca = 'Poodle';
console.log(poodle.raca, poodel.uivar());


***CONSTRUCTOR FUNCTION***
Funções que servem, como ja diz o nome, para construir as caracteristicas de uma classe objetos.
EX.

function criaCachorro(raca, idade, peso){
    let cachorro = Object.create({});
    cachorro.raca = raca;   
    cachorro.idade = idade;
    cachorro.peso = peso;
    return cachorro;
}
//É POSSIVEL USAR O NEW PARA CRIAR UM OBJETO A PARTIR DE UMA FUNÇÃO CONSTRUTORA.
let poodle = new criaCachorro('Poodle', 2, 5);

let pastorAlemao = criaCachorro('Pastor Alemão', 3, 35);
console.log(pastorAlemao);

***HERANÇA***
O objeto filho herda propriedades e métodos do objeto pai.
EX.

class mamifero{
    constructor(patas){
        this.patas = patas;
    
    }
}

class cachorro extends mamifero{
    constructor(patas, raca){
        super(patas, patas);
        this.raca = raca;
    }
}

let poodle = new cachorro (4, 'Poodle');
console.log(poodle);

*/
