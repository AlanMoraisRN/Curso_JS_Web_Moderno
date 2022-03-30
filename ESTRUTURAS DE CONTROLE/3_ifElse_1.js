function calcularMedia (num){
    if (num >= 7) {
        console.log ("Parabéns, está aprovado! Sua nota é: ".concat(num));
    } else {
        console.log("Nos vemos na recuperação!");
    }
}

calcularMedia (8);
calcularMedia (6);
calcularMedia ("Epa"); //CUIDADO AO UTILIZAR DIFERENTES TIPOS DE CONDIÇÃO EM JS (FRACAMENTE TIPADA)
