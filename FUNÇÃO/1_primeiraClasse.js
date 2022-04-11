//FUNÇÃO EM JS É FIRST-CLASS OBJETC (CITIZENS)
//HIGH-ORDER FUNCTION

//CRIANDO DE FORMA LITERAL UMA FUNÇÃO
function fun1(){

}

//ARMAZENANDO UMA FUNÇÃO DENTRO DE UMA VARIÁVEL OU CONSTANTE
const fun2 = function(){

}

//ARMAZENANDO UMA FUNÇÃO DENTRO DE UM ARRAY
const array = [function (a, b) { return a + b}, fun1, fun2];
console.log(array[0](2, 3));

//ARMAZENANDO UMA FUNÇÃO DENTRO DE UM ATRIBUTO DE OBJETO
const obj = {}
obj.falar = function(){ return "Olá!"};
console.log(obj.falar());

//PASSANDO UMA FUNÇÃO COMO PARÂMETRO DE UMA OUTRA FUNÇÃO
function run(fun){
    fun();
}

run(function () { console.log("Executando...") });

//RECEBENDO UMA FUNÇÃO COMO RETORNO DENTRO DE OUTRA FUNÇÃO
function soma (a, b){
    return function (c){
        console.log(a + b + c);
    }
}

soma(2, 3)(4);

const receber = soma (2, 3);
receber(4);