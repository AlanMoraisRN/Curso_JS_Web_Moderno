//ESTRTURA DE REPETIÇÃO DO/WHILE

function inteiroEntre (min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao; //DIFERENTE DO WHILE, O DO/WHILE NÃO EXIGE INICIALIZAÇÃO DA VARIÁVEL DE CONTROLE.

do {
    opcao = inteiroEntre(-1, 10);
    console.log("OPÇÃO ESCOLHIDA FOI: ".concat(opcao));
} while (opcao != -1)

console.log("FIM!");

/**
 * ADENDO SOBRE O DO/WHILE...
 * ÚNICA DIFERENÇA ENTRE O WHILE E O DO/WHILE
 * É PELO MENOS UMA ÚNICA REPETIÇÃO É EXECUTADA.
 */