/*
ESTRUTURA DE CONTROLE
************************************************************************************************
IF

CONDIÇÃO "SE".
let idade= 14;
if (idade == 14){   
    console.log("Você tem 14 anos");
}

************************************************************************************************    
ELSE

CONDIÇÃO SE NÃO.
let idade= 15;
let nome = "João";
if (idade == 14 && nome == "João"){   
    console.log("liberado");
}else{
    console.log("não liberado");
}

************************************************************************************************
ELSE IF
CONDIÇÃO SE NÃO SE.

let idade= 15;
let nome = "João";
if (idade == 14 && nome == "João"){   
    console.log("liberado");

}else if(idade == 15 && nome == "João"){
    console.log("liberado(com exceção)");

}else{
    console.log("não liberado");
}

************************************************************************************************
SWITCH CASE
funiona como um if e else, onde if seria case e else seria default.
let idade= prompt("Digite sua idade: ");    

switch(idade){
    case "10":
        console.log("Você tem 10 anos");
        break;
    case "11":
        console.log("Você tem 11 anos"); 
        break;   
    case "12":
        console.log("Você tem 12 anos");
        break;
    default:
        console.log("Você tem menos de 10 ou mais de 12 anos");
        break;

}

Obs: o break é usado para parar o switch, caso não seja usado, o switch irá executar todos os cases.

*/