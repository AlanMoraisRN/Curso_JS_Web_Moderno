//ESTRUTURA DE DECISÃO SWITCH

const imprimirResultado = function (nota){
    switch (Math.floor(nota)){ //MATH.FLOOR ARREDONDAMENTO PARA BAIXO
        case 10: case 9:
            console.log("Quadro de Honra!");
            break;
        case 8: case 7:
            console.log("Aprovado!");
            break;
        case 6: case 5: case 4:
            console.log("Em recuperação!");
            break;
        case 3: case 2: case 1: case 0:
            console.log("Reprovado!");
            break;
        default:
            console.log("Nota inválida!");
    }
}

imprimirResultado (10);
imprimirResultado (8.7);
imprimirResultado (6.9);
imprimirResultado (4.3);
imprimirResultado (3.9);
imprimirResultado (-1);
imprimirResultado (11); 

/**
 * UM ADENDO PARA O SWITCH...
 * O COMANDO BREAK SEMPRE É NECESSÁRIO PARA QUE
 * SE EXECUTE APENAS O BLOCO DESEJADO, CASO NÃO
 * SERÁ EXECUTADO TODOS APÓS A VALIDAÇÃO DA ENTRADA
 * DE DADOS.
 * 
 * O DEFAULT SEMPRE É NECESSÁRIO, ELE É O ELSE DO SWITCH.
 */