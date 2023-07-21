//ANOTAÇÕES SOBRE EXPRESSÕES REGULARES.

/*
Expressões regulares são formas de encontrar padroes em strings, como por exemplo, encontrar um email, um cpf, um telefone, etc. Também chamadas de regex.
******************************************************************************************************************************************************************
Como criar uma expressão regular:
Em Js, regex são um tipo de objetos, por isso, podemos criar uma regex de duas formas:

let reg1 = new RegExp("@gmail.com");
let reg2 = /@gmail.com/;
console.log(/@gmail.com/.test('j.marcos@gmail.com'));

////podemos definir um intervalo de valores////
ex: /[0-9]/ //vai procurar por qualquer numero de 0 a 9.
ex: /[a-z]/ //vai procurar por qualquer letra de a a z.
ex: /[123]/  //vai procurar por 1, 2 ou 3.'

OBS: QUANDO USAMOS O INTERVADO COMO /[1-9]/ E USAMOS A EXPRESSÃO "CONSOLE.LOG(/[1-9]/.TEST(" VERIFICA SE POSSUI O VALOR 63")", ELE VAI RETORNAR TRUE,
POIS ELE VAI PROCURAR POR 6 E 3, E COMO TEM AMBOS, ELE VAI RETORNAR TRUE. NESSE CASO PODERIA USAR O /[123456789]/.TEST(" VERIFICA SE POSSUI O VALOR 63"). 
VAI RETORNAR FALSO, POIS ELE VAI PROCURAR O PADRÃO 63.


******************************************************************************************************************************************************************
CARACTERES ESPECIAIS:
\w - representa qualquer caracter alfanumerico ou underline.('teste', 123, undefined, null)
\W - representa qualquer caracter que NÃO seja alfanumerico ou underline.(#%$@!.)
\d - representa qualquer caracter numerico.
\D - representa qualquer caracter que NÃO seja numerico.
\s - representa qualquer caracter de espaço em branco.
\S - representa qualquer caracter que NÃO seja de espaço em branco.
. - representa qualquer caracter, menos quebra de linha.
EX:
let reg1 = /\w/;
console.log(reg1.test('teste'));

EX:
let reg1 = /\W\W\W/;
console.log(reg1.test('..')); -> retorna o false pois so tem 2 caracteres especiais.

******************************************************************************************************************************************************************
OPERADOR NOT(^)
Podemos criar um regex que aceita tudo, MENOS o que estriver dentro dele. Para isso, usamos o operador NOT(^).
EX:
let reg1 = /[^abcdef]/;
console.log(reg1.test('zxs')); - > retorna true, pois ele aceita tudo, menos o que estiver dentro dele.

******************************************************************************************************************************************************************
OPERADOR PLUS(+);
Quando esse operador esta na frente de alguma expressão, significa que ele pode se repetir infinitas vezes.
ex:
let reg1 = /\d+/;
console.log(reg1.test("123"));

******************************************************************************************************************************************************************
OPERADOR QUESTION(?);
faz com que o digito anterior seja opcional.    
ex:
let reg1 = /@gmail.com.?b?r?/;
console.log(reg1.test("marcos@gmail.com)); -> ambos serão true, pois ".br" é opcional.
console.log(reg1.test("marcos@gmail.com.br"));

******************************************************************************************************************************************************************
OCORRENCIA PRECISA({})

let reg1 = /\d{4,5} - \d{4}/;
console.log(reg1.test("1233 - 123"));-> retorna false, pois não tem pelo menos 4 digitos antes do hifen.

******************************************************************************************************************************************************************
Metodo exec();
retorna um objeto com informações sobre a regex. Se não encontrar nada, retorna null.
let reg1 = /\d/.exec("teste 1");
console.log(reg1); - > retorna o objeto com as informações. 
console.log(reg1.index); - > retorna a posição que foi encontrado o primeiro valor.
let reg2 = /\d/;
console.log(reg2.exec("teste")); - > retorna null, pois não encontrou nada.

******************************************************************************************************************************************************************
METODO MATCH();
funciona de forma similar ao exec(), porém, com uma estrutura diferente.
let reg1 = "teste1".match(/\d/);
console.log(reg1); - > retorna o objeto(array) com as informações.

******************************************************************************************************************************************************************
CHOICE PATTERNS(|);
funciona como um "ou", ou seja, se tiver um dos valores, ele retorna true.
ex:
let reg1 = /\d (teste1|teste2)/;
console.log(reg1.test("10 teste1")); //retorna true, pois tem o teste1.
console.log(reg1.test("10 teste3")); //retorna false, pois não tem o teste3.

*/
//REGEX NA PRATICA, VALIDANDO UM DOMINIO.
let domi = /www?\w.com|.com.br/;
console.log(domi.test("www.teste.com.br")); //retorna true, pois tem o dominio.
console.log(domi.test(".com")); //retorna false, pois não tem o dominio.
console.log(domi.test("www.teste")); //retorna false, pois não possui .com ou .com.br.

//REGEX NA PRATICA, VALIDANDO UM EMAIL.

let email = /\w+@\w+\.\w+/;
console.log(email.test("gmail.com.br")); //retorna true, pois tem o email.
console.log(email.test("@gmail.com.br"));//retorna false, pois não tem o email.

//REGEX NA PRATICA, VALIDANDO DATA DE NASCIMENTO.
let nasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;
console.log(nasc.test('10/10/1990')); //retorna true, pois tem a data.