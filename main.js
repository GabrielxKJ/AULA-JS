//variavel

var n1, n2;

n1 = prompt("Digite o primeiro valor");
n2 = prompt("Digite o Segundo valor"); // input dos valores, porém estão no tipo string

resultado = parseFloat(n1) + parseFloat(n2); // parseFloat é uma função que transforma o tipo 'string' em tipo number

console.log(resultado);