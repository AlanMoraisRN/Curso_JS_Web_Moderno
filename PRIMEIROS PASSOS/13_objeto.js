//OBJETO

console.log("PRODUTO 1");

const produto1 = {};
produto1.Nome = "NOTEBOOK";
produto1.Marca = "DELL";
produto1.Categoria = "INFORMÁTICA";
produto1.Valor = 3500.90.toFixed(2);
console.log(produto1);

/*
IMPORTANTE: CASO NAS DECLARAÇÕES DE ATRIBUTOS DO OBJETO
VOCÊ USAR CARACTERES ESPECIAIS, O JS VAI ENTENDER AQUELA
ATRIBUIÇÃO COMO SENDO STRING.
*/

console.log(" ");

// let nomeProduto = prompt("DIGITE O NOME DO PRODUTO: ");
// let marcaProduto = prompt("DIGITE A MARCA DO PRODUTO: ");
// let categoriaProduto = prompt("DIGITE A CATEGORIA DO PRODUTO: ");
// let valorProduto = prompt("DIGITE O VALOR DO PRODUTO: ");

console.log("PRODUTO 2");

const produto2 = {
    Nome: "COMPUTADOR",
    Marca: "LENOVO",
    Categoria: "INFORMÁTICA",
    Valor: 4500.90.toFixed(2)
}
console.log(produto2);