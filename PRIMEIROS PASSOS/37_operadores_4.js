//OPERADORES UNÁRIOS

let num1 = 1;
let num2 = 2;

num1++;
console.log(num1);
--num1; //PREFERÊNCIA NA HORA DA EXECUÇÃO O OPERANDO PRÉFIX
console.log(num1);

console.log(++num1 === num2--); //INCREMENTOU, COMPAROU COM NUM2 DEPOIS O NUM2 DECREMENTOU
console.log(num1 === num2); 