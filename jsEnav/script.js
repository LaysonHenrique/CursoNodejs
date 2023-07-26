//ANOTAÇÕES SOBRE JAVASCRIPT E NAVEGADOR
/*
-----------------------------------------------------------------------------------------------------------------------
PROTOCOLOS: É A FORMA EM QUE COMPUTADORES SE COMUNICAM NA REDE.
HTTP: SERVE PARA QUE POSSAMOS SOLICITAR ARQUIVOS, IMAGENS, E ETC.(HYPER TEXT TRANSFER PROTOCOL)
SMTP: PROTOCOLOS PARA ENVIAR EMAIL.
TCP: PROTOCOLO DE TRANSFERÊNCIA.
-------------------------------------------------------------------------------------------------------------------------
URL: A URL (UNIFORM RESOURCE LOCATOR) É O CAMINNHO DO SITE E PODE SER DIVIDIDA EM 3 PARTES: PROTOCOLO, SERVIDOR E ARQUIVO.
-----------------------------------------------------------------------------------------------------------------------------
HTML: LINGUAGEM DE MARCAÇÃO.
AS TAGS DO HTML CRIAM TÍTULOS, PARÁGRAFOS, IMAGENS, LISTAS E ETC.
UMA TAG É DEFINIDA POR <P> </P>.
OBS: ALGUMAS TAGS NÃO POSSUEM FECHAMENTOS.

*ESTRUTURA DO HTML - > TODO DOCUMENTO HTML POSSUI DUAS PARTES IMPORTANTES , A "HEAD" E A "BODY". HEAD POSSUI TODA A PARTE DE CONFIGURAÇÃO, BODY TERÁ OS
ELEMENTOS VISUAIS, TUDO O QUE SE VÊ.
--------------------------------------------------------------------------------------------------------------------------
HTML E JAVASCRIPT - > UTILIZAMOS JAVASCRIPT EM HTML POR MEIO DA TAG "SCRIPT" ATRAVÉS DO SRC. ALGUMAS TAGS HTML ACEITAM EXECUÇÃO DE CÓDIGO JS DIRETO NO HTML
OBS: LEMBRANDO QUE SEMPRE QUE LINKAMOS UM ARQUIVO EXTERNO, ESTAMOS CHAMANDO O MESMO VIA PROTOCOLO HTTP.
OBS: VOCÊ PODE CHAMAR O ARQUIVO JS TANTO NO HEAD OU NO BODY, MAS É MAIS RECOMENDADO QUE SE CHAME DENTRO DO BODY, POIS É UMA GARANTIA QUE TODA CONFIGURAÇÃO
DENTRO DO HEAD SEJA EXECUTADA.

--------------------------------------------------------------------------------------------------------------------------
HTML E DOM - > QUANDO UMA PAGINA WEB É REQUISITADA, ELA RECEBE UM TEXTO QUE É TRANSFORMADO EM HTML. AS TAGS VÃO SE ALINHANDO UMA COM ÁS OUTRAS E FORMANDO 
UMA ESTRUTURA EM QUE ELEMENTOS FICAM DENTRO DOS OUTROS. ESSA ESTRTURA É REPRESENTADA EM JS POR UM OBJETO CHAMADO DOM (DOCUMENT OBJECT MODEL).

DOM - > PODEMOS ALTERAR UM HTML PELO DOM, ELEMENTOS, ATRIBUTOS E CSS. PODEMOS ACESSAR O DOM PELO OBJETO "DOCUMENT". EXEMPLO: DOCUMENT.BODY.
ARVOVE DOM - > DCCUMENTOS HTML SÃO CONSIDERADOS A ARVORE INTEIRA, A RAIZ É O DOCUMENT (SÓ EXISTE UM DOCUMENT POR PÁGINA), CADA ELEMENTOS SÃO OS NODE(NÓS) E CONTEUDOS COMO
TEXTO, IMAGENS, ETC SÃO OS LEAF NODES (NÓS FOLHAS).

ACESSAMOS OS ELEMENTOS PELO OBJETO DOCUMENTS.BODY, QUE É O NÓ RAIZ, DEPOIS ACESSAMOS AS CHILDNODES E DEPOIS OS ELEMENTOS ESPECIFICOS.
EX:
 DOCUMENT.BODY
 DOCUMENT.BODY.CHILDNODES
 DOCUMENT.BODY.CHILDNODES[0]
 DOCUMENT.BODY.CHILDNODES[0].ELEMENTO ESPECIFICO
--------------------------------------------------------------------------------------------------------------------------
PODEMOS ACESSAR OS ELEMENTOS DE FORMA MAIS RAPIDA ATRAVÉS DE METODOS, ALGUNS DELES SÃO: getElementById, getElementsByTagName, getElementsByClassName E O querySelector.

ENCONTRANDO ELEMENTOS PELA TAG: document.getElementsByName("h1");

ENCONTRANDO ELEMENTOS PELO ID: document.getElementById("titulo");

ENCONTRANDO ELEMENTOS PELA CLASSE: document.getElementsByClassName("titulo");

ENCONTRANDO ELEMENTOS PELO QUERYSELECTOR: document.querySelector("h1"); - > NOS PERMITE ENCONTRAR ELEMENTOS PELOS SELETORES DO CSSS.

--------------------------------------------------------------------------------------------------------------------------
ALTERANDO O HTML PELO DOM USANDO ALGUNS METODOS:

insertBefore: INSERE UM ELEMENTO ANTES DE OUTRO.
ex: let novoElemento = document.createElement("h1");
    let enderecoAlvo = document.querySelector("#titulo principal");
    let enderecoPai = document.querySelector("#conteiner-principal");

    enderecoPai.insertBefore(novoElemento, enderecoAlvo);
    ****Obs: document.createTextNode("texto"); -> CRIA UM TEXTO.*****
    let texto = document.createTextNode("texto");
    novoElemento.appendChild(texto);


appendChild: INSERE UM ELEMENTO NO FINAL DE OUTRO.
ex:
let novoElemento = document.createElement("h1");

let texto = document.createTextNode("texto");
novoElemento.appendChild(texto);

let p = document.querySelector("# conteiner-principal");
let pai = p.parentNode;
pai.appendChild(novoElemento);


replaceChild: SUBSTITUI UM ELEMENTO POR OUTRO.
ex:

let novoElemento = document.createElement("h1");

let heading = document.querySelector("#conteiner-principal");
let pai = heading.parentNode;

pai.replaceChild(novoElemento, heading);


*/

let novoElemento = document.createElement("h1");
let texto = document.createTextNode("titulo teste");
novoElemento.appendChild(texto);

let heading = document.querySelector("#conteiner-principal");
let pai = heading.parentNode;

pai.replaceChild(novoElemento, heading);