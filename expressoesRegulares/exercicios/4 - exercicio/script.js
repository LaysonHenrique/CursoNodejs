
//criar uma regex que valide um ip

const regIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
console.log(regIp.test("0.1.1.1"));