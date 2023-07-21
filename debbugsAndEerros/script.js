//ANOTAÇÕES SOBRE DEBBUGS E ERROS.
/*
******************************************************************************************************************************************************************
BUGS: São erros que acontecem no código e que impedem o funcionamento do mesmo(NA MAIORIA DAS VEZES POR ERRO DO PROGRAMADOR E DE BIBLIOTECAS).
DEBBUGS: forma de corrigir e/ou visualizar os erros que acontecem no código.

******************************************************************************************************************************************************************
STRICT MODE: de forma resumida, deixa o javascript mais rigoroso, não permitindo que erros passem despercebidos. Deve ser declarado no topo dos arquivos ou funções.
"use strict";
variavel = 10; //erro, pois não foi declarada.

******************************************************************************************************************************************************************
CONSOLE.LOG: É UMA FORMA DE REALIZAR O DEBBUG DO CÓDIGO EM JAVASCRIPT, MOSTRANDO O QUE ESTÁ ACONTECENDO NO CÓDIGO.

******************************************************************************************************************************************************************
DEBUGGER: É MAIS UMA FORMA DE REALIZAR O DEBBUG, PORÉM MAIS COMPLEXO E MENOS UTILIZADO.
O código é parado na linha que voce declarar "debugger;".

******************************************************************************************************************************************************************
TRATAMENTOS DE IMPUT POR FUNÇÃO: é uma forma de controlar, os valores que serão inseridos no programa, por meio de funções.

******************************************************************************************************************************************************************
EXCEPTION: podemos criar erros no programa caso uma condição não seja atingida, por meio do comando "throw new Error("mensagem");".

let a = 10;
if(a > 5){
    throw new Error("a não pode ser maior que 5");
}
******************************************************************************************************************************************************************
TRY/CATCH: tenta executar um codigo, caso não consiga, retorna um erro.

try{
    a = b + c;
}catch(erro){
    console.log('Não foi possivel realizaar a operação, erro:' + erro);
}
******************************************************************************************************************************************************************
FINALLY: é executado sempre, independente do try e/ou catch funcionar. Além de funcionar somente com try/catch ou somente try. funcina como um "else" do try/catch, mas que sempre sera
executado.

try{
    a = b + c;
}catch(erro){
    console.log('Não foi possivel realizaar a operação, erro:' + erro);
}finally{
    console.log('sempre será executado');
}

******************************************************************************************************************************************************************
ASSERTIONS: é uma forma de verificar se o código esta funcionando corretamente, falamos do throw new Error. Error pode ser considerado uma assertion.
*/
