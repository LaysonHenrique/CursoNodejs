//Funções nos ajuda a reutilizar código, sem precisar repetir o mesmo código várias vezes.
/*
TESTES DE FUNÇÕES NO CONSOLE DO NAVEGADOR

****************************************************************************************************
teste1 (sem parametros)

function imprimeNoConsole(){
    console.log('Olá Mundo!');
}
imprimeNoConsole(); 

****************************************************************************************************
teste2 (com parametros)
let a = 10;
let b = 20;

function imprimeNoConsole(val1,val2){
    console.log(val1 + val2);
}
imprimeNoConsole(a,b);

****************************************************************************************************
teste3 (com parametros e retorno) e reutilizada em variaveis

function soma (val1,val2){
    return val1 + val2;
}
 const resultado = soma(10,20);
 console.log(`O valor da soma é ${resultado}.`)

****************************************************************************************************
teste4

const numero =  function(val1,val2){
    console.log(val1 + val2);
}
console.log(numero(10,20));


****************************************************************************************************
Arrow Function
outra forma de escrever uma função, se equivale a uma função anonima. Geralmente atreladas a uma variavel.

const numero = (a, b) =>{
    console.log(a + b);
}
numero(10, 20);

****************************************************************************************************
arrow function simples

const numero = (b) => b + b;
console.log(numero(10));

****************************************************************************************************
Undefined em funções
nome = prompt("Informe seu nome:");
idade = 10;

function teste(nome, idade){
    if(idade == undefined){
        console.log(`seu nome é ${nome}.`);
    } else{
        console.log(`Meu nome é ${nome} e minha idade é ${idade}.`);
    }
}

teste(nome, idade);

******************************************************************************************************  
default parameters
permite que você inicialize um parametro com um valor padrão caso não seja passado nenhum valor.

function soma(a = 1, b = 2){
    console.log(a + b);
}
soma(); -> resultado sera 3
soma (2, 5); -> resultado sera 7

******************************************************************************************************
closure
é uma função dentro de outra função, onde a função interna tem acesso a variaveis da função externa.

function somar (a){
    let cont = a;
    let somarContador = function(){
        console.log(cont);
        cont++;
    }
    return somarContador;
}

let meuContador = somar(1);

meuContador(); - > resultado sera 1
meuContador(); - > resultado sera 2

******************************************************************************************************
função recursiva
é uma função que chama ela mesma.

function somentePares (numero){
    if(numero % 2 == 0){
        console.log(`O numero ${numero} agora é par`);
    }else{
        console.log(` O numero ${numero} ainda é par`);
        somentePares(numero + 1);

    }
}
somentePares(1);

*/

