//USANDO PARÂMETROS EM FUNÇÕES - SEM PASSAGEM POR PARÂMETRO

function soma(){
    let soma = 0;
    for (let i in arguments){
        soma += arguments[i];
    }
    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3));
console.log(soma(1.1, 2.2, "TESTE"));
console.log(soma("A", "B", "C")); //RETORNO 0ABC POIS O RETORNO É UMA CONCATENAÇÃO