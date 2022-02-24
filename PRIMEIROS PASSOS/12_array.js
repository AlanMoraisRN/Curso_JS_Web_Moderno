//ARRAY

const vetor = [7.7, 7.9, 8.6, 9.3];
console.log(vetor);

console.log(" ");
console.log(vetor[5]); //SAÍDA undefined POIS NÃO EXISTE VALOR NA POSIÇÃO SETADA
console.log(" ");

vetor[4] = 9.5;
console.log(vetor);

console.log(" ");
console.log(vetor.length); //length RETORNA O TAMANHO DO ARRAY, NO CASO 5 POSIÇÕES

console.log(" ");
vetor.push({id: 3}, false, null, "ALAN MORAIS"); //push() ADICIONA ESSES VALORES DENTRO DO ARRAY
console.log(vetor);

console.log(" ");

vetor.pop(); //pop() REMOVE O ÚLTIMO VALOR DO ARRAY
console.log(vetor);

console.log(" ");

delete vetor[2]; //delete DELETANDO VALOR DA POSIÇÃO 2
console.log(vetor);

console.log(" ");

console.log(typeof vetor);