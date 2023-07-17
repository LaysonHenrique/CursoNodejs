function sumEvenNumbers(valor){
    let soma = 0;
    for (let i = 0; i< valor.length; i++){
        if (valor[i] % 2==0){
            soma += valor[i];
        }
    }
    return soma;
}
console.log(sumEvenNumbers([1,2,3,4,5,6,7,8,9,10]));