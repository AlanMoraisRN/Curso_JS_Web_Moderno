const peso1 = 1.0;
const peso2 = Number("2.0"); //ATRIBUIÇÃO DO TIMPO NUMBER A VARIÁVEL

console.log(peso1, peso2);
console.log(" ");
console.log(Number.isInteger(peso1)); //CHECAR SE A PASSAGEM DE PARÂMETRO PARA PESO1 É DO TIPO INTEIRO
console.log(Number.isInteger(peso2)); //CHECAR SE A PASSAGEM DE PARÂMETRO PARA PESO2 É DO TIPO INTEIRO
console.log(" ");

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = (avaliacao1 * peso1) + (avaliacao2 * peso2);
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));
console.log(typeof media);
console.log(media.toString()); //CONVERTER O VALOR DE MÉDIA EM STRING
console.log(" ");

console.log(media.toString(10)); //CONVERTER O VALOR DE MÉDIA EM STRING DECIMAL
console.log(media.toString(2)); //CONVERTER O VALOR DE MÉDIA EM STRING BINÁRIO
console.log(media.toString(8)); //CONVERTER O VALOR DE MÉDIA EM STRING OCTADECIMAL
console.log(media.toString(16).toUpperCase()); //CONVERTER O VALOR DE MÉDIA EM STRING HEXADECIMAL -- toUpperCase PARA MOSTRAR LETRAS EM MAÍSCULAS