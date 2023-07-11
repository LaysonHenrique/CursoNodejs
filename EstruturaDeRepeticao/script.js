/*
ESTRUTURAS DE REPETIÇÃO(LOOP)
************************************************************************************************
WHILE
REALIZA UMA AÇÃO ATÉ DETERMINADA CONDIÇÃO SEJA ATINGIDA, SENDO ELA UM BOOLEANO OU OUTRA CONDIÇÃO.

let idade = 10;
while (idade < 18) {
    console.log("Aluno é menor de idade");
    console.log(idade);
    idade++;
}

************************************************************************************************
DO WHILE
REALIZA UMA AÇÃO ATÉ DETERMINADA CONDIÇÃO SEJA ATINGIDA, SENDO ELA UM BOOLEANO OU OUTRA CONDIÇÃO(parecida com while, mas pouco usada).

let idade = 10;
 do{
    console.log("Aluno é menor de idade");
    console.log(idade);
    idade++;
 }while(idade < 18);

************************************************************************************************
FOR
REALIZA UMA AÇÃO ATÉ DETERMINADA CONDIÇÃO SEJA ATINGIDA, SENDO ELA UM BOOLEANO OU OUTRA CONDIÇÃO(parecida com while).
POSSUI UMA ESTRTURA PARECIDA COM O IF, MAS COM UMA SINTAXE DIFERENTE.

for(let i = 0; i <= 10; i++){
    //IF PARA NÃO IMPRIMIR O 0
    if(i != 0){
        console.log(i);
    }
}

************************************************************************************************
BREAK
PARA O LOOP DE UMA DETERMINADA CONDIÇÃO SEJA ATINGIDA.(SEMPRE BOM SE ATENTAR A IDENTAÇÃO PARA O BREAK FUNCIONAR DA MELHOR FORMA POSSÍVEL)

for(let i = 0; i <= 10; i++){
    //IF PARA NÃO IMPRIMIR O 0
    if(i != 0){
        console.log(i);
    }
    //o break para o loop quando uma determinada condição é atingida
    if(i > 6){
        break;
    }
}


************************************************************************************************
CONTINUE
OTIMA PARA PULAR UMA DETERMINADA CONDIÇÃO.

for(let i=0; i < 10; i++){
    //pula o valor de i caso seja == 5 ou 7
    if (i == 5 || i == 7){
        continue;
    }
    console.log(i);

}



*/