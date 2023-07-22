
//cria uma regex para validar um usuario. Esse usuario pode conter caracteres de a-z, 0-9, - e _.

const regUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;
console.log(regUsuario.test("0?????")); //retorna true, pois tem o usuario.