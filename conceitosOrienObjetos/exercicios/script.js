/*
EXERCICIOS COMENTADOS.

****************************************************************************************************
EXERCICIO 1 - > CRIAR UMA CLASSE QUE SIMULA UM BANCO, SALDO, DEPOSITO E SAQUE.

class banco{
    constructor(saldo){
        this.saldo = saldo;
    }
    deposito(valor){
        this.saldo += valor;
    }
    saque(valor){
        this.saldo -= valor;
    }
}

let conta = new banco(saldo = 1000);

conta.deposito(100);
console.log(conta.saldo);
conta.saque(100);
console.log(conta.saldo);


****************************************************************************************************
EXERCICIO 2 - > classe que simula o carrinho de compras de um e-commerce. Contendo itens, numero de itens e o valor total.

class carrinho{
    constructor(itens, numeroItens, valorTotal){
        this.itens = itens;
        this.numeroItens = numeroItens;
        this.valorTotal = valorTotal;
        
    }
    adicionarItem(item){
        let contador = 0;
        for(let itensCarrinho in this.itens){
            if(this.itens[itensCarrinho].id == item.id){
                this.itens[itensCarrinho].numeroItens += item.numeroItens;
                contador = 1;
                     }
        
                }

        this.numeroItens += item.numeroItens;
        this.valorTotal += item.preco * item.numeroItens;

        if(contador == 0){
            this.itens.push(item);
        }
    
    }
}

let loja1 = new carrinho([
    {
    id: 1,
    nome: "camiseta",
    quantidade: 1,
    preco: 10,
    
},
{
    id: 2,
    nome: "camiseta",
    quantidade: 1,
    preco: 10,
}
]);
console.log(loja1);
loja1.adicionarItem({id:1, nome:"calça", quantidade:1, preco:20});
console.log(loja1);




****************************************************************************************************
EXERCICIO 3 - > CRIAR UM OBJETO QUE ARMAZENA O ENDEREÇO DE ALGUEM, CONTENDO RUA, BAIRRO, CIDADE E ESTADO.

class endereco{
constructor(rua, bairro, cidade, estado){
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    }
    atualizarRua(rua){  
        this.rua = rua;
    }
    atualizarBairro(bairro){                
        this.bairro = bairro;
    }   
    atualizarCidade(cidade){
        this.cidade = cidade;
    }
    atualizarEstado(estado){
        this.estado = estado;
    }
}
let novoEndereco = new endereco("rua 1", "bairro 1", "cidade 1", "estado 1");

novoEndereco.atualizarRua("rua 2");
console.log(novoEndereco);



****************************************************************************************************
EXERCICIO 4 - > CRIAR UMA CLASSE QUE SIMULA UM CARRO, COM MARCA, COR E GASOLINA RESTANTE. ALÉM DE UM METODO PARA DIRIGIR O CARRO, QUE DIMINUI 
A GASOLINA RESTANTE. ALÉM DE ABASTECER O CARRO.

class carro{
    constructor(marca, cor, gasolina, consumo){
        this.marca=marca;
        this.cor=cor;
        this.gasolina=gasolina;
        this.consumo=consumo;
    }
    dirigir(km){
        let litrosConsumo = km/this.consumo;
        this.gasolina -= litrosConsumo;
        }
    abastecer(litros){
        this.gasolina += litros;
        }
     }

    let carro1 = new carro("fiat", "vermelho", 10, 10);
    carro1.dirigir(1);
    console.log(carro1.gasolina);
 



****************************************************************************************************
EXERCICIO 5 - > CRIAR UMA CLASS CONTA BANCARIA, QUE CONTENHA O SALDO DA CONTA CORRENTE, POUPANÇA E JUROS DA POUPANÇA.
MÉTODOS PARA SAQUE DEPOSITO, ALEM DO METODO PARA TRANSFERIR DINHEIRO DA CONTA CORRENTE PARA A POUPANÇA. CRIAR UMA CONTA ESPECIAL QUE HERDA DA CONTA NORMAL,
OS JUROS DA CONTA ESPECIAL SÃO DOBRADOS DA NORMAL.

class contBankPrincipal{
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca){
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupanca = saldoPoupanca;
        this.jurosPoupanca = jurosPoupanca;
    }
    depositoCont(saldo){
        this.saldoCorrente += saldo;
    }
    saqueCont(saldo){
        this.saldoCorrente -= saldo;
    }
    transfPoupanca(transf){
        this.saldoPoupanca -= transf;
        this.saldoCorrente += transf;

    }
}

class contBankEspecial extends contBankPrincipal{
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca){
        super(saldoCorrente, saldoPoupanca, jurosPoupanca);
        this.jurosPoupanca = jurosPoupanca * 2;
    }

}

let conta1 = new contBankEspecial(1000, 1000, 0.05);

console.log(conta1);
conta1.depositoCont(100);
console.log(conta1);


*/

