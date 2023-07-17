function isPalindrome (palavra){
    if(palavra == palavra.split("").reverse().join("") ){
        return true;
    }else{
        return false;
    }
}

console.log(isPalindrome("arara"));

/*
javascript tem um conjunto de funções para trabalhar com strings, sendo uma delas o Split("") que transforma a string em uma array,  o reverse() que inverte
a ordem dos caracteres e o join("") que reuni novamente os caracteres em uma string.
*/