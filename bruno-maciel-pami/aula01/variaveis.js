// Comentario
// Javascript é uma linguagem fracamente tipada
var texto = "Ola"; //aspas duplas contem sempre uma string
let texto2 = 'Mundo'; // ponto e virgula não é obrigadorio
const texto3 = "!"; //aspas simples tambem serve para string

console.log (texto , texto2 , texto3);
//virgula concatena com espaço, enquanto o sinal de + deixa tudo junto

texto =  'Hello'
texto2 = 'World'
let msg = `${texto} ${texto2} ${texto3}`
console.log(msg);

//texto3 = 'teste'
//O exemplo acima mostra que é impossivel reatribuir um novo valor
// a uma constante

let numero = 4
console.log (typeof numero);


let obj = { nome: "Bruno", idade: 17}
console.log(
    "nome da pessoa:" , obj.nome)

console.log(typeof obj)
//objeto é sempre um elemento chave/valor

let arr= ['Bruno', 'B.', 'Maciel']
console.log (arr[0])
console.log(typeof arr)

