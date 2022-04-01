//ESTRUTURA DE REPETIÇÃO FOR

let contador = 0;
while (contador <= 5){
    console.log("CONTADOR IGUAL A: ".concat(contador));
    contador++;
}

console.log("");

for (let i = 0; i <= 5; i++){
    console.log("VALOR DE I IGUAL A: ".concat(i));
}

console.log("");

const notas = [7.5, 8.0, 9.5, 7.3, 8.4, 7.3, 9.9];
for (let i = 0; i < notas.length; i++){
    console.log("SUAS NOTAS FORAM: ".concat(notas[i].toFixed(1)));
}

console.log("");
console.log("FIM");