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
*/
