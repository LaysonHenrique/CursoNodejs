//o objetivo é criar uma class que recebe um objeto vazio, alem de conter um metodo que recebe uma string e conta quantas palavras tem nela.

class WordCounter{
    constructor(palavras){
        palavras = [];
    }

    countWords(palavras){
        let i;
        palavras = palavras.split(' ');
        for( i = 0; i < palavras.length; i++){
            console.log(palavras[i]);
            }
        return i;
        }
    }

let frase = new WordCounter();


console.log(frase.countWords('ola', 'mundo'));

//NÃO CONCLUIDO