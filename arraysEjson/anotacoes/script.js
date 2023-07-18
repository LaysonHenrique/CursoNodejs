/*
array serve como uma lista de dados, onde pode ser do mesmo tipo ou misturados.
EXEMPLOS:
let nome = ['joao', 'maria', 'jose'];
let idade = [20, 30, 40];

let misturado = ["layson", 10];
console.log(nome[0]); 
console.log(idade[1], nome[1])

PROPRIEDADES:
quando a array é criada, ela recebe uma propriedade chamada length, que é o tamanho da array.
EXEMPLO:
let nome = ['joao', 'maria', 'jose'];
console.log(nome.length); // 3
console.log(nome[2].length); // 4 ->length nesse caso seria a propriedade do primeiro indice da array.

MÉTODOS:
São propriedades que funcionam como funções, ou seja, executam ações.
EXEMPLO:
let nome = ['joao', 'maria', 'jose'];  

nome.push('layson'); // adiciona um novo elemento no final da array.
nome.pop(); // remove o ultimo elemento da array.
nome.unshift('layson'); // adiciona um novo elemento no inicio da array.
nome.shift(); // remove o primeiro elemento da array.
nome.indexOf('maria'); // informa o indice do elemento informado.
nome.splice(1, 1); // remove um elemento da array, informando o indice e a quantidade de elementos a serem removidos.
nome.slice(1, 2); // retorna um novo array, com os elementos informados, informando o indice e a quantidade de elementos a serem retornados.
nome.concat('layson'); // concatena um novo elemento no final da array.
nome.join(' '); // retorna uma string com os elementos da array, separados pelo elemento informado.
nome.includes('layson'); // retorna true ou false, informando se o elemento informado existe na array.
nome.reverse(); // inverte a ordem dos elementos da array.
nome.sort(); // ordena os elementos da array em ordem alfabetica.
nome.fill('layson'); // preenche a array com o elemento informado.
nome.forEach(function(item, index, array) { // executa uma função para cada elemento da array.  


OBJETOS:
É uma coleção de dados, onde cada dado é composto por uma chave e um valor. Parecido com uma array, porém, ao invés de indices, temos chaves.
EXEMPLO:
let ṕessoa = {
    nome: 'maria','jose',
    idade: 20,
    profissao: 'programadora'
}
console.log(pessoa.nome[1])

DELETAR E ADICIONAR PROPRIEDADES:
EXEMPLO:
let pessoa = {
    nome: 'maria',
    idade: 20,
    profissao: 'programadora'
};
console.log(pessoa.nome);
delete pessoa.nome; -> deleta a propridade nome do objeto
console.log(pessoa.nome);
pessoa.casada = false; - > adiciona uma nova propriedade ao objeto
console.log(pessoa.casada);

COPIAR OBJETOS:
usando o metodo assign do objeto Object, podemos copiar um objeto para outro.   
EXEMPLO:
let pessoa = {
    nome: 'maria',
    idade: 20,
    profissao: 'programadora'
}
let materiais = {
    carro: true,
    moto: false,
}
console.log(pessoa);
Object.assign(pessoa, materiais);
console.log(pessoa);

ACESSANDO AS CHAVES DO OBJETO:
usando o metodo 'keys' do objeto 'Object'.
EXEMPLO:
let pessoa = {
    nome: 'maria',
    idade: 20,
    profissao: 'programadora'
}
let materiais = {
    carro: true,
    moto: false,
}
console.log(pessoa);
Object.assign(pessoa, materiais);
console.log(Object.keys(pessoa)); - > informa o numero de chaves do objeto e quais são elas.


MUTAÇÃO:

let pessoa = {
    nome: 'maria',
    idade: 20,
    profissao: 'programadora'
}
let pessoa2 = pessoa; -> aqui estamos atribuindo o valor de pessoa a pessoa2, ou seja, estamos copiando o valor de pessoa para pessoa2.
let pessoa3 = {
    nome: 'maria',
    idade: 20,
    profissao: 'programadora'
}
console.log(pessoa == pessoa2); -> true - > esse objeto esta copiando o objeto pessoa, ou seja, ele esta apontando para o mesmo lugar na memoria.
console.log(pessoa == pessoa3); -> false - > esse objeto, mesmo que tenha os mesmos valores e chaves, ele esta apontando para outro lugar na memoria.
Obs:se eu mudo algo em "pessoa", muda automaticamente em 'pessoa2', pois eles estão apontando para o mesmo lugar na memoria.


REST OPERATOR:
faz com que a função receba um numero indefinido de parametros, transformando-os em uma array.
EXEMPLO:
function soma(...numeros) {
    let total = 0;
    numeros.forEach(n => total += n);
    return total;
}
console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));



DESTRUCTURING ASSIGNMENT:
é uma expressão do javascript que possibilita extrair dados de arrays ou objetos em variaveis distintas.
EXEMPLO:
let carro = {
    portas: 4,
    cor: 'vermelho',
}
let {portas: vportas, cor: vcor} = carro;
console.log(vportas, vcor);

EXEMPLO EM ARRAYS:

let nomes = ['jose','joao','maria'];

let [nome1, nome2, nome3] = nomes;
console.log(nome1);

****************************************************************************************    
JSON:
JAVASCRIPT OBJECT NOTATION - > é um formato de dados, e não um objeto. Geralmente usado para transferir dados entre sistemas. ex. backend para frontend.
EXEMPLO:

Obs:nesse exemplo abaixo usei aspas simples, mas o json aceita somente aspas duplas e não aceita comentarios. Deve seguir a estrtura correta.

let pessoa = {
    'nome': 'maria',
    'idade': 20,
}
console.log(pessoa.nome);

JSON.STRINGIFY: -> transforma um objeto em uma string no formato json.
EXEMPLO:
let pessoa = {
    'nome': 'maria',
    'idade': 20,
}
let jsonString = JSON.stringify(pessoa);
console.log(jsonString);
let stringJson = JASON.parse(jsonString); -> transforma uma string no formato json em um objeto.
console.log(stringJson);


*/




