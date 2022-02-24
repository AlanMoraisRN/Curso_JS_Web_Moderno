//TEMPLATES STRINGS

const nome = "Mickaelly";
const concat = "Olá " + nome + "!";
const template = ` 
    Olá!
    ${nome}!` //CONCATENAR TEMPLATE STRING
console.log(concat, template);

//USANDO EXPRESSÕES...
console.log(`1 + 1 = ${1 + 1}`); //${} PASSAGEM POR PARÂMETRO DE FUNÇÃO

const up = frase => frase.toUpperCase();
console.log(`Ei... ${up("cuidado")}!`);