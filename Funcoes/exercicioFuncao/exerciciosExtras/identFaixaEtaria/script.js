function faixaEtaria(idade){
    if(idade < 12){
        idade="Criança";
        return idade;
        
    }else if(idade >= 12 && idade <= 24){
        idade = "Jovem";
        return idade;
    }else if(idade => 25){
        idade = "Adulto";
        return idade;
    }
}

let crianca = faixaEtaria(10);
console.log(crianca);
let adulto = faixaEtaria(24);
console.log(adulto);    