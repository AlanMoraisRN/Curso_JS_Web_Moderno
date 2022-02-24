
let altura = 1.76; //number
let peso = 64.1; //number
let condicao; //boolean

let imc = peso / Math.pow(altura, 2); //Math.pow() PARA CALCULAR POTÊNCIA DE DOIS
console.log("INDÍCE IMC: " + imc.toFixed(2)); //toFixed(2) PARA LIMITAR AS CASAS DECIMAIS EM DUAS

if (imc < 18.5){
    condicao = false;
    console.log("DESNUTRIDO");
}else {
    condicao = true;
    console.log("PESO NORMAL");
}

if (imc > 24.9) {
    condicao = false;
    console.log("OBESO");
}

console.log("");

console.log(typeof altura); //typeof EXIBE O TIPO DE DADO CONTIDO NA VARIÁVEL
console.log(typeof peso);
console.log(typeof imc);
console.log(typeof condicao);