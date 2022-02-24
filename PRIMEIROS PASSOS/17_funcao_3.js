//ARMAZENANDO UMA FUNÇÃO DENTRO DE UMA VARIÁVEL
const verSoma = function (a, b) {
    console.log(a + b);
}

verSoma(2, 3);

//ARMAZENANDO UMA FUNÇÃO ARROW DENTRO DE UMA VARIÁVEL
const soma = (a, b) => {
    return a + b;
}

console.log(soma(2, 3));

//RETORNO IMPLÍCITO DE UMA FUNÇÃO ARROW
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));

const saida = a => console.log(a);
saida("IHUUUUUU!!!!");