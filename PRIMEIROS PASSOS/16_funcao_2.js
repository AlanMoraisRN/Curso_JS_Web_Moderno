//FUNÇÃO SEM RETORNO
function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(2, 5);
imprimirSoma(2); //NaN POIS FOI INSTANCIADO DOIS PARÂMETROS
imprimirSoma(2, 5, 7, 3, 9, 4); //7 POIS SOMOU APENAS OS DOIS PRIMEIROS VALORES QUE FORAM INSTANCIADOS, O RESTANTE FOI IGNORADO
imprimirSoma();

//FUNÇÃO COM RETORNO
function soma(a, b = 0){
    return a + b;
}
console.log(soma); //IMPRIMIR NO CONSOLE O TIPO DA FUNÇÃO SOMA
console.log(soma(2, 3));
console.log(soma(2));
