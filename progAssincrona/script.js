//ANOTAÇÕES SOBRE PROGRAMAÇÃO ASSÍNCRONA
/*
AÇÕES PODEM SER EXECUTADAS EM PARALELO COM OUTRA AÇÃO.
AÇÕES ASSÍNCRONAS NÃO BLOQUEIAM O PROGRAMA.
EXEMPLO: EM UM CHECKOUT, O CLIENTE DESEJA SALVAR SEU ENDEREÇO, MAS A PAGINA NÃO PRECISA SER RECARREGADA OU SE TORNAR 
INOPERANTE PARA OUTRA AÇÃO, COMO A ESCOLHA DO MÉTODO DE PAGAMENTO.


------------------------------------------------------------------------------------------------------------------------
CALLBACKS - > É UMA UMA FUNÇÃO QUE EXECUTA DETERMINADA AÇÃO APÓS O PROCESSAMENTO DE UMA FUNÇÃO ASSÍNCRONA.

EXEMPLO COM A FUNÇÃO setTimeout() -> EXECUTA UMA AÇÃO APÓS UM DETERMINADO TEMPO.

console.log('valor 1');
seTimeout(function(){
    console.log('valor 5');
},4000);
console.log('valor 2');
console.log('valor 3');
console.log('valor 4');

------------------------------------------------------------------------------------------------------------------------
PROMISES -> É UM OBJETO QUE REPRESENTA O PROCESSAMENTO DE UMA OPERAÇÃO ASSÍNCRONA. ELA PROMETE RETORNAR O RESULTADO EM UM PONTO FUTURO DO CODIGO.
PARA CHAMAR UMA PROMISSE USAMOS O OBJETO "PROMISE" E PARA RESOLVER A PROMISSE USAMOS O "RESOLVE" E PARA REJEITAR USAMOS O "REJECT". A ESTRTURA FICARIA
"PROMISE.RESOLVE() E PROMISE.REJECT()".
USAMOS O THEN PARA QUE ELA SEJA EXECUTADA  NOVAMENTE EM UM PONTO FUTURO DO CODIGO. A ESTRUTURA FICARIA "PROMISE.THEN((VALue") => {CODIGO}).

EXEMPLO:


let promesse = Promise.resolve(5+1);

console.log(promesse);

promesse.then((value) => {console.log(value + 5)});

- > ERROS EM PROMISSES -> USAMOS O CATCH PARA TRATAR ERROS EM PROMISSES. A ESTRUTURA FICARIA "PROMISE.CATCH((ERRO) => {CODIGO}).
EXEMPLO:

let promesse = Promise.resolve(new Error('Algo deu errado'));

console.log("bom dia");

promesse.then(value => console.log(value)).catch(reason => console.log("Ocorreu um erro:" + reason));

- > REJEITANDO UMA PROMISSE -> USAMOS O REJECT PARA REJEITAR UMA PROMISSE. A ESTRUTURA FICARIA "PROMISE.REJECT((ERRO) => {CODIGO}).
FUNCIONA COMO UMA FUNÇÃO QUE RETORNA O REJECT DEPOIS DE UMA CONDIÇÃO.
EXEMPLO:

function verificarNumero(num){
    return new Promise((resolve, reject) =>{
        if (num == 3){
            Promise.resolve(console.log("O numero é 3"));
        }else{
            reject(new Error("Falhou"));
        }
    })
}

- > PROMISSE.ALL -> USAMOS O PROMISSE.ALL PARA EXECUTAR VARIAS PROMISSES EM PARALELO. A ESTRUTURA FICARIA "PROMISSE.ALL([PROMISSE1, PROMISSE2, PROMISSE3])".

- > ASYNC/AWAIT -> USAMOS O ASYNC/AWAIT PARA EXECUTAR PROMISSES DE FORMA SINCRONA. A ESTRUTURA FICARIA "ASYNC FUNCTION NOME(){}".
PARA EXECUTAR UMA PROMISSE USAMOS O AWAIT. A ESTRUTURA FICARIA "AWAIT PROMISSE".
EXEMPLO:

async function somar(a,b){
    return b + a;
}
somar(3,3).then(function(value){
    console.log(value);
});

OBS: O AWAIT ESPERA ALGUMA CONDIÇÃO SER EXECUTADA PARA DEPOIS EXECUTAR A PROMISSE.

------------------------------------------------------------------------------------------------------------------------
GENERATORS -> É UMA FUNÇÃO COM COMPORTAMENTO DIFERENTE. ELA PODE SER PAUSADA E RETOMADA DEPOIS. PARA CRIAR UM GENERATOR USAMOS O "*".
O YIELD SERVE PARA PAUSAR E SALVAR O ESTADO ATUAL DA FUNÇÃO. A ESTRUTURA FICARIA "YIELD".
EXEMPLO:


*/

function* criadorId(){
    let id = 0;
    while(true){
        yield id++;
    }
}
let criaId = criadorId();
console.log(criaId.next().value);
console.log(criaId.next().value);

