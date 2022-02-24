//NULL E UNDEFINED
let valor;
console.log(valor);

valor = null; // null É UMA REFERÊNCIA A UM ENDEREÇO DE MEMÓRIA VAZIO.
console.log(valor);
// console.log(valor.toString()); -- ERRO

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined //EVITE ATRIBUIR UNDEFINED
console.log(!!produto.preco); //COMO PREÇO FOI DEFINIDO COMO UNDEFINED, O RESULTADO DA NEGAÇÃO, EM BOOLEAN, É FALSE
//delete produto.preco;
console.log(produto);

produto.preco = null; //SEM PREÇO
console.log(!!produto.preco);
//console.log(!!produto); -- OBS.: A NEGAÇÃO DE NULL É TRUE
console.log(produto);