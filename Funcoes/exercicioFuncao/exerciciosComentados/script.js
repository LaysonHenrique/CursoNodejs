//EXERCICIOS DE FUNÇÕES PARA FIXAÇÃO DE CONHECIMENTO
/*
****************************************************************************************************
EX1 - function que imprima hello world

function imprime(){
    console.log(`hello world.`);
}
imprime();

****************************************************************************************************
EX2 - function que imprima o nome da pessoa

function imprime(){
    console.log(`Seu nome é ${nome}.`);
}
let nome = prompt(`Digite seu nome:`);
imprime(nome);

****************************************************************************************************
EX3 - function que receba dois valores e realize a soma deles.

let soma = function(a,b){
    return a + b;
}
console.log(soma(2,3));
                                        ****** ou ******
function soma(a, b){
    console.log(a + b);
}
soma(2,3);

****************************************************************************************************
EX4 - function que receba um parâmetro maximo e retorne um número aleatório entre 0 e o número maximo.

function aleatorio(val){
    return Math.floor(Math.random() * val); "floor arredonda para baixo o valor aleatório"
}
console.log(aleatorio(10));

****************************************************************************************************
EX5 - function que retorne uma mensagem de caso a pessoa possa tirar ou não a carteira de motorista.

function cnh(idade){
    if(idade >= 18){
        return `Voce pode tirar a CNH`;
    }else{
        return `Voce não pode tirar a CNH`;
    }
}
console.log(cnh(17));

****************************************************************************************************
EX6 - function que detecta o tipo de dado que foi inserido.

function tipoDeDado(valor){
    if(typeof valor === "string"){
        return `O dado é uma string`;
    }else if(typeof valor === "boolean"){
        return `O dado é um boolean`;
    }else if(typeof valor === "number"){
        return `O dado é um number`;
    }else{
        return `tipo invalido`;
    }
}

console.log(tipoDeDado(null));

****************************************************************************************************
EX7 - function que receba um numero negativo e retorne o valor positivo usando o Math.abs().

let retornaValor = function(valor){
    if(valor < 0){
        return Math.abs(valor);
    }else{
        return `Valor informado já é positivo`;
    }
}   
console.log(retornaValor(-10));
****************************************************************************************************
EX8 - function que verifica o tamanho da string e retorna se é maior que 10 ou não.

function verificaString(valor){
    if(valor.length > 10){
        return `Texto muito longo.`;
    }else{
        return `Texto dentro do limite.`;
    }
}
let valor = prompt(`Digite um texto:`);
console.log(verificaString(valor));
****************************************************************************************************
EX9 - function que receba dois valores e retorne a potencia.

function retornaPotencia(){
    let a = prompt(`Digite o valor de A:`);
    let b = prompt(`Digite o valor de B:`);
    return Math.pow(a,b);
}
console.log(retornaPotencia());
****************************************************************************************************
EX10 - functions que decrementa um valor e imprima só os valor pares

function decrementaPares(valor){
    for(let i = 1; i <= valor; i){
        if(valor % 2 == 0){
            console.log(valor);
        }
        valor --;
    }
}
decrementaPares(10);
****************************************************************************************************

*/
function faixaEtaria(idade){
    if(idade < 12){
        idade="Criança";
        return idade;
        
    }else if(idade >= 12 && idade <= 24){
        idade = "Jovem";
        return idade;
    }else if(idade => 25){
        idade = "Adulto";
        return idade;
    }
}

let crianca = faixaEtaria(10);
console.log(crianca);
let adulto = faixaEtaria(24);
console.log(adulto);    