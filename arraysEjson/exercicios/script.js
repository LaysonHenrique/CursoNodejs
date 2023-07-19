/*
*********************************************************************************************** 
Exercício 1: criar uma array com 5 itens e acessar o item 1, 3 e 4.

let arr = ['a', 'b', 3, 4, 'o'];

console.log(arr[0],arr[2],arr[3]);
***********************************************************************************************
Exercício 2: criar duas arrays com 2 e 4 itens respectivamente e mostrar a quantidade de elementos.

arr1 = ['a', 'b'];
arr2 = [1, 2, 3, 4];
console.log(arr1.length, arr2.length);

***********************************************************************************************
Exercício 3: criar um objeto onibus com os atributos rodas, passageiros e portas e imprimir todas as propriedades.

let onibus = {
    rodas: 8,
    limitePassageiros: 40, 
    portas: 2,
}

console.log(onibus.rodas, onibus.limitePassageiros, onibus.portas);
***********************************************************************************************
Exercício 4:adicionar a propriedades janelas e excluir a propriedade rodas.

let onibus = {
    rodas: 8,
    limitePassageiros: 40, 
    portas: 2,
}
onibus.janelas=20;
delete onibus.rodas;
console.log(onibus.janelas);


***********************************************************************************************
Exercício 5:criar uma array com 5 nomes e verificar se o seu esta contido na array e imorimir uma mensagem.

let nomes = ['pedro', 'joao', 'maria', 'jose', 'lucas'];

for (let i = 0; i< nomes.length; i++){
    if (nomes[i] == 'layson'){
        console.log('Seu nome esta na lista');
    }else{
        console.log('Seu nome não esta na lista');
    }
}


***********************************************************************************************
Exercício 6: criar duas arrays, uma com 5 e outra com menos e verificar o tamanho de cada uma e imprimir uma mensagem.

let arr1 = ['a', 'b', 'c', 'd', 'e'];

let arr2 = [1, 2, 3, 4];

function verificaArray (arr){
    if (arr.length > 5){
        console.log('Muitos elementos');
    }else{
        console.log('Poucos elementos');
    }
}

verificaArray(arr1);
verificaArray(arr2);

***********************************************************************************************
Exercício 7: criar uma array com 5 elementos e criar uma iteração entre eles e imprimir o resultado

let arr = [10, 'b', 'c', 'd', 'e'];
let soma = 0;
for (let i = 0; i < arr.length; i++){
    if(typeof(arr[i]) == 'number'){
        soma += arr[i];
    }
}
console.log(soma);
***********************************************************************************************
Exercício 8: criar um json com 3 propriedades e imprimir todas as propriedades.

let varJson = {
    "nome": "layson",
    "idade": 20,
    "sexo": "masculino",
}

console.log(varJson.nome, varJson.idade, varJson.sexo);

***********************************************************************************************
Exercício 9: criar uma array apartir de um frase e imprimir palavra por palavra.

let frase = 'Eu sou o layson';

let arr= frase.split(' ');

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}


***********************************************************************************************
Exercício 10: criar um objeto calculadora que possui os seguintes metodos: somar, subtrair, multiplicar e dividir. A calc deve aceitar somente dois parametros
e imprimir o resultado.

let calc = {
    somar: function(a, b){
        return a + b;
    },
    subtrair: function(a, b){
        return a-b;
    },
    multiplicar: function(a, b){
        return a*b;
    },
    dividir: function (a,b){
        return a/b;
    },
}
console.log(calc.somar(2, 3));
console.log(calc.subtrair(2, 3));
console.log(calc.multiplicar(2, 3));
console.log(calc.dividir(2, 3));


***********************************************************************************************
*/


