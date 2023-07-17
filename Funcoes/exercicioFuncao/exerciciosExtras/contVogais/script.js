
function countVowels(valor){
  return valor.match(/[aeiou]/gi).length;
}
console.log(countVowels('Aeiou'));

/*
a funcionalidade .match retorna o numero de vezes que a expressao regular foi encontrada
nesse exercicio foi usada o exemplo das vogais
*/
