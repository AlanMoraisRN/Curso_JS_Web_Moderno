//VALORES BOOLEANOS

let isAtivo = true;
console.log(isAtivo);

isAtivo = false;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); //! NEGAÇÃO

console.log(" ");

console.log("Os verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"ALAN");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log(" ");
console.log("Os falsos...");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log(" ");
console.log("Pra finalizar, retorno de chamada da expressão OU");
console.log(!!( "" || null || 0 || "ALAN MORAIS")); //SAÍDA SERÁ O PRIMEIRO VALOR TRUE ENCONTRADO

console.log(" ");

let nome = "";
console.log(nome || "Desconhecido!");