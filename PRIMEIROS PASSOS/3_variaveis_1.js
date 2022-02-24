//DECLARAÇÃO DE VARIÁVEL

var objeto = "CANETA";
var quantidade = 10;
var preco = 2.5;
var valorPago = quantidade * preco;

//EM JS PODE-SE USAR O COMANDO VAR OU LET PARA DECLARAÇÃO DE VARIÁVEL//

//USA-SE O SINAL DE + PARA CONCATENAR VARIÁVEIS COM STRINGS//
console.log("COMPREI " + quantidade + " QUANTIDADES DE " + objeto + " POR R$ " + preco + " REAIS");
console.log("AO FINAL TERMINEI GASTANDO R$ " + valorPago + " REAIS");

/*
    IMPORTANTE!
    VALOR DE VARIÁVEIS PODEM SER
    ALTERADOS COM O DESENROLAR DO CÓDIGO,
    POR ISSO O NOME VARIÁVEL.

    DIFERENTE DE VARIÁVEIS COM VALORES CONSTANTES.
*/

// const nome = "ALAN";
// console.log(nome);

// nome = "Micka";
// console.log(nome);

/*
    O TRECHO DE CÓDIGO ACIMA 
    DEMONSTRA UM ERRO POR TENTAR
    MUDAR VALORES DE UMA VÁRIAVEL
    CONSTANTE.
 */