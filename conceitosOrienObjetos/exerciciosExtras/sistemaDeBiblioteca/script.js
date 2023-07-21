/*
Crie uma classe chamada "Livro" que representa um livro em um sistema de biblioteca.

A classe deve ter os seguintes atributos:

titulo: representando o título do livro (string).

autor: representando o autor do livro (string).

disponivel: representando a disponibilidade do livro (boolean).

A classe deve ter os seguintes métodos:

emprestar(): verifica se o livro está disponível para empréstimo e, se estiver, atualiza a disponibilidade para false.

devolver(): verifica se o livro não está disponível para empréstimo e, se não estiver, atualiza a disponibilidade para true.

consultarDisponibilidade(): retorna a disponibilidade atual do livro.

*/

class Livro{
    constructor(titulo, autor, disponivel){
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = disponivel;
    }
    emprestar(){
        if(this.disponivel === true){
            this.disponivel = false;
        }
    }
    devolver(){
        if(this.disponivel === false){
            this.disponivel = true;
        }

    }

    consultarDisponibilidade(){ 
        return this.disponivel;
        

    }

}

let novoEmprestimo = new Livro("O Senhor dos Anéis", "J. R. R. Tolkien");

console.log(novoEmprestimo.consultarDisponibilidade());