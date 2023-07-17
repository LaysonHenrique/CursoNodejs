function calculateAverage(lista){
    let soma = 0;
    for(let i=0; i<lista.length; i++){
        soma += lista[i];
    }
    if(lista.length == 0){
        return 0;
    }
    return soma/lista.length;
}

let lista = [1,2,3,4,5,6,7,8,9,10];

console.log(calculateAverage(lista));