//criar uma função para encontrar o maior número de um array

function findMaxNumber(arr){
    return Math.max(...arr);
}
let arr = [1,2,3,4,5,6,7,8,9,20];

console.log(findMaxNumber(arr));
