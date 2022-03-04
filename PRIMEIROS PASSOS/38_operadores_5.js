//OPERADORES TERNÁRIOS

const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado"; //FUNÇÃO ARROW
//OPERADOR TERNÁRIO COMPOSTO POR TRÊS PARTES: EXPRESSÃO, TRUE, FALSE

console.log(resultado(7.1));
console.log(resultado(6.5));

const final = note => {
    return note >= 7 ? "Aprovado" : "Reprovado";
}
//MESMA LÓGICA COM SINTAXES DIFERENTES

console.log(final(9.0));