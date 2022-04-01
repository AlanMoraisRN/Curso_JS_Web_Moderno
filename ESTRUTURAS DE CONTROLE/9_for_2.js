//ESTRUTURA DE REPETIÇÃO FOR IN

const notas = [7.5, 8.0, 9.5, 7.3, 8.4, 7.3, 9.9];

for (let i in notas){
    console.log(i, notas[i]);
}

const pessoa = {
    nome: "Alan",
    sobrenome: "Morais",
    altura: 1.76,
    peso: 64
}

console.log("");

for (let atributo in pessoa){
    console.log(atributo, "=", pessoa[atributo]);
}