//USANDO O CONCEITO DE CHAVE/VALOR
const saudacao = "Bem Vindo!"; //CONTEXTO LÉXICO 1

function saudar() {
    const saudacao = "Olá, seja muito bem vindo!"; //CONTEXTO LÉXICO 2
    return saudacao;
}

// OBJETOS SÃO GRUPOS ANINHADOS DE PARES CHAVE/VALOR
const Cliente = {
    nome: "Alan", //NOTAÇÃO: AO FINAL DE CADA ATRIBUTO DO OBJETO, SEPARA-SE AS LINHAS POR ,
    idade: 32,
    altura: 1.76,
    peso: 64.2,
    endereço: {
        logradouro: "Avenida José Gastel B Pereira",
        numero: 203,
        bairro: "Centro",
        cep: "59.350-000"
    }
}

console.log(saudacao);
console.log(saudar());
console.log(" ");
console.log("A IMPRESSÃO ACIMA CORRESPONDE A UMA ".concat(typeof saudar).toUpperCase());

console.log(" ");

console.log("A IMPRESSÃO ABAIXO CORRESPONDE A UM ".concat(typeof Cliente).toUpperCase());
console.log(" ");
console.log(Cliente);

//NOTAÇÃO: AO IMPRIMIR UMA FUNÇÃO, USA-SE () A FRENTE DO NOME DA FUNÇÃO.
//NOTAÇÃO: AO IMPRIMIR UM OBJETO, USA-SE APENAS O NOME DO OBJETO.
