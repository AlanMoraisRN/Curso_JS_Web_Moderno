let texto1 = "alan morais";
let texto2 = "MICKAELLY LUCENA";

console.log(texto1.toUpperCase()); //toUpperCase() SETAR LETRAS MAIÚSCULAS
console.log(texto2.toLowerCase()); //toLowerCase() SETAR LETRAS MINÚSCULAS

console.log(texto1[0].toUpperCase() + texto1.slice(1, 4).toLowerCase() + " " 
+ texto1[5].toUpperCase() + texto1.slice(6).toLowerCase() + " " 

+ texto2[0].toUpperCase() + texto2.slice(1,9).toLowerCase() + " "
+ texto2[10].toUpperCase() + texto2.slice(11).toLowerCase());

//slice() CONCATENANDO COM A SETENÇA