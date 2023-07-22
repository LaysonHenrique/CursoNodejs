//criar uma regex que tenha "Marca:nome da marca pre determinada"
let regMarcas = /Marca: Nike|Adidas|Puma|Asics?/;
console.log(regMarcas.test("Marca: Adidas")); //retorna true, pois termina com uma das marcas.