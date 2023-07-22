//criar uma regex que aceite somente STRINGS que terminem com ID.

let regId = /\w+ID/;
console.log(regId.test("usuarioID")); //retorna true, pois termina com ID.
console.log(regId.test("usuario")); //retorna false, pois não termina com ID.