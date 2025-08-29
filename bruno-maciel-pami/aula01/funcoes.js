let n1 = 2;
let n2 = 5;
console.log(n1 / n2);
/* Pascal Case = NomeVariavel (primeira letra da palavra
é minuscula)*/
/*Camek Case = nomeVariavel (primeira letra da palavra é 
minuscula e o restante começa com maiscula) */
/*Kebab Case = nome-variavel (tanto faz se começa com
maiscula ou minuscula, o importante é separar por hífen)*/
/*Snake Case = nome_variavel (tanto faz se começa com maiscula
ou minuscula o importante é separar por underline)*/

function Soma (){
    console.log(10 + 121);
}
Soma();
//função simples que não recebe parametros

function SomaComParametros( v1, v2) {
    let resultado = v1 + v2; 
    return resultado;
}
console.log (SomaComParametros(n1, n2));