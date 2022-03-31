//ESTRTURA DE REPETIÇÃO WHILE

function inteiroEntre (min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1){
    opcao = inteiroEntre(-1, 10);
    console.log("OPÇÃO ESCOLHIDA FOI: ".concat(opcao));
}

console.log("FIM!");