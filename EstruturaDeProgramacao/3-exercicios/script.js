//EXERCICIOS SOBRE ESTRUTURA DE PROGRAMAÇÃO, ONDE SERA ABORDADA ESTRTURA DE CONTROLE E DE REPETIÇÃO.
/*
*****************************************************************************************************************************
EXERCICIO 1
armazene valores em variaveis dos tipos number, boolean e string e imprima no console o tipo de cada variavel.
let a = 1;
let b = true;
let c = "teste";
console.log(typeof a, typeof b, typeof c);
Obs:typeof é um operador que nos retorna o tipo do dado de uma variavel.

*****************************************************************************************************************************
EXERCICIO 2
crie uma estrutura condicional usando o if para controlar a entrada de uma balada, onde se a pessoa tiver idade maior ou igual a 18 anos ela pode entrar, caso contrario 
ela não pode entrar.

let idade = prompt("Digite sua idade: ");

if(idade > 18){
    console.log("Pode entrar");
}else{
    console.log("Não pode entrar");
}

*****************************************************************************************************************************
EXERCICIO 3
crie uma variavel constante com o seu nome e depois verifica se o nome armazenado de fato é o seu usando o if. Caso seja, imprima uma saudação usando o console.log.

const nome = "layson";

if(nome =="layson"){
    console.log(`ola ${nome} !`);
}

*****************************************************************************************************************************
EXERCICIO 4
teste a função math.pow que calcula a potencia de um numero, passando dois valores: a base e o expoente. Exemplo: math.pow(2,3) = 8.

let expo= 2;
let base = prompt("Digite a base: ");

switch (base) {
    case "2":
        console.log(Math.pow(base,expo));
        break;
    case "3":
        console.log(Math.pow(base,expo));
        break;
    case "18":
        console.log(Math.pow(base,expo));
        break;
    default:
        console.log("informe o valor 2, 3 ou 18");
        break;
}
*****************************************************************************************************************************
EXERCICIO 5
armazene a velocidade de um carro em uma variavel e verifique se ele esta acima da velocidade permitida, que é de 80km/h. Se estiver abaixo ou acima mostre uma mensagem.

let velocidade = 79;

if(velocidade > 80){
    console.log("Você esta acima da velocidade permitida"); 
}else{
    console.log("Você esta dentro da velocidade permitida");
}

*****************************************************************************************************************************
EXERCICIO 6
crie um programa que verifica varias informações e imprime mensagens para diferentes cenarios. Varieaveis como idade e se tem cnh.

let idade = prompt("Digite sua idade: ");
let cnh = prompt("Você tem CNH? ");

if(idade >= 18 && cnh == "sim"){
    console.log("Você pode dirigir");
}else if(idade >= 18 && cnh == "nao"){
    console.log("Você não pode dirigir, mas pode tirar a CNH");
}else{
    console.log("Você não pode dirigir e nem tirar a CNH");
}
*****************************************************************************************************************************
EXERCICIO 7
escreva um loop while que mostre um valor de 0 a 10 no console.
#USANDO WHILE
let i = 0;
while(i <= 10){
    console.log(i);
    i++;
}
#USANDO DO WHILE
let i = 0;
do{
    console.log(i);
    i++;
}while(i <= 10);

*****************************************************************************************************************************
EXERCICIO 8
escreva um loop for que mostre um valor de 100 a 50 no console.

for(let i = 100; i >= 50; i--){
    console.log(i);
}

*****************************************************************************************************************************
EXERCICIO 9
escreva um loop de 0 a 50 que informe se o numero é par ou impar.

for(let i = 0;i <=50;i++){
    if(i % 2 == 0){
        console.log(`${i} é par`);
    }else{
        console.log(`${i} é impar`);
    }
}

*****************************************************************************************************************************
EXERCICIO 10
verifica se o numero é primo ou não.

let numero = prompt("Digite um numero: ");

if (numero > 1 && numero % numero == 0 && numero % 1 == 0) {
    console.log(`${numero} é primo`);
} else {
    console.log(`${numero} não é primo`);
}
*****************************************************************************************************************************
EXERCICIO 11
função que verifica se o numero é negativo ou positivo, par ou impar ou neutro.

let numero = -10;
classificarNumero(numero);

function classificarNumero(numero){
    if(numero > 0 && numero % 2 ==0){
        console.log("Positivo e Par");
    }else if(numero > 0 && numero % 2 !=0 ){
        console.log("Positivo e Ímpar");
    }else if(numero < 0){
        console.log("Negativo");
    }else if(numero == 0){
        console.log("Neutro");
    }
    return numero;
}


*/
