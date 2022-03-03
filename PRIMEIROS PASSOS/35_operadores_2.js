//USANDO OPERADORES RELACIONAIS

console.log ("CASO 1:", "1" == 1);
console.log ("CASO 2:", "1" === 1); //ESTRITAMENTE IGUAL - FALSO POIS UM É STRING E OUTRO NUMBER
console.log ("CASO 3:", "3" != 3);
console.log ("CASO 4:", "3" !== 3); //ESTRITAMENTE DIFERENTE - TRUE

console.log("CASO 5:", 3 < 2);
console.log("CASO 6:", 3 > 2);
console.log("CASO 7:", 3 <= 2);
console.log("CASO 8:", 3 >= 2);

const d1 = new Date (0); // 01/01/1970
//console.log(d1);
const d2 = new Date (0);

console.log("CASO 9:", d1 === d2); 
//FALSO, POIS COMO TRATA-SE DE UMA FUNÇÃO, A COMPARAÇÃO SE DÁ POR MEIO DE ENDEREÇO DE MEMÓRIA

console.log("CASO 10:", d1 == d2); 

console.log("CASO 11:", d1.getTime() == d2.getTime()); 
//TRUE, O VALOR DE GETTIME() É DADO EM MILISEGUNDOS DESDE A DATA 0 DO JS

console.log("CASO 12:", undefined == null);
console.log("CASO 12:", undefined === null);