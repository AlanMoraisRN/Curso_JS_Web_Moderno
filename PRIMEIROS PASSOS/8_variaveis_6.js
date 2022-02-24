console.log(7 / 0); //RESULTADO ENORME, SAÍDA INFINITY
console.log("10" / 2); //CONVERSÃO DE STRING EM NUMBER PARA OPERAÇÃO MATEMÁTICA
console.log("SHOW" * 2); //NaN - NOT A NUMBER
console.log(0.1 + 0.7); //IMPRECISÃO
console.log((0.1 + 0.7).toFixed(1)); //CORREÇÃO DA OPERAÇÃO ACIMA
//console.log(10.toString()); ---- ERRO! NÃO SE PODE SETAR UM NÚMERO EM STRING SEM O USO DE PARÊNTESES
console.log(typeof (10.345).toString()); //TIPO DA CONVERSÃO EM STRING