//TRABALHANDO COM STRINGS

const escola = "Udemy 2022";

console.log(escola.charAt(3)); // charAt() IDENTIFICAR O CARACTERE DA POSIÇÃO SETADA
console.log(escola.charCodeAt(7)); //carCodeAt() IDENTIFICA O CÓDIGO DA TABELA UNICODE DO CARACTERE SETADO

console.log(escola.indexOf("0")); //indexOf() IDENTIFICAR O ÍNDICE DO CARACTERE SETADO

console.log(escola.substring(3)); //substring() IMPRIMIR A PARTIR DA POSIÇÃO DO CARACTERE SETADO
console.log(escola.substring(0, 4)); //IMPRIMIR APENAS O INTERVALO DAS POSIÇÃO SETADAS

console.log("Curso ".concat(escola).concat("!")); //concat() PARA CONCATENAR STRINGS.

console.log(escola.replace("y", "i")); //replace() PARA SUBSTITUIR O VALOR DO PRIMEIRO PARÂMATRO PELO SEGUNDO

console.log("Alan,Mickaelly,Maria,Rivaldo".split(",")); //split() GERAR UM ARRAY ORGANIZADO PELO VALOR SETADO