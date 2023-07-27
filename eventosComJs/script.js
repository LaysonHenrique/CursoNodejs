//ANOTAÇÕES SOBRE EVENTOS.
/*
EVENTOS SÃO AÇÕES CONDICIONADAS ALGUM TIPO DE RESPOSTA DO USUÁRIO, SENDO ELE POR TECLADO, MOUSE, ETC. USAMOS O HANDLER PARA TRATAR ESSES EVENTOS.

-----------------------------------------------------------------------------------------------------------------------------------------------------
ADICIONANDO UM EVENTO:

let botao1 = document.querySelector("#botao1");

    botao1.addEventListener("click", function(){
    console.log("Clicou no botão");
})

-----------------------------------------------------------------------------------------------------------------------------------------------------
REMOVENDO UM EVENTO:

function msg(){
    console.log("Clicou no botão");
}

let botao1 = document.querySelector("#botao1");
let botao2 = document.querySelector("#botao2");

botao1.addEventListener("click", msg);
botao2.addEventListener("click", msg);

setTimeout(function(){
    botao1.removeEventListener("click", msg);
    botao2.removeEventListener("click", msg);
},5000);


*/
function msg(){
    console.log("Clicou no botão");
}

let botao1 = document.querySelector("#botao1");
let botao2 = document.querySelector("#botao2");

botao1.addEventListener("click", msg);
botao2.addEventListener("click", msg);

setTimeout(function(){
    botao1.removeEventListener("click", msg);
    botao2.removeEventListener("click", msg);
},5000);
