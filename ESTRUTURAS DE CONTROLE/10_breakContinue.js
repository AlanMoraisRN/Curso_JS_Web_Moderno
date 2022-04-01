//ESTRUTURA DE CONTROLE BREAK/CONTINUE

const notas = [7.5, 8.0, 9.5, 7.3, 8.4, 7.3, 9.9];

for (let i in notas){
    if (i == 5){
        break;
    }
    console.log(i, "=", notas[i]);
}

console.log("");

for (let i in notas){
    if (i == 5){
        continue;
    }
    console.log(i, "=", notas[i]);
}

console.log("");

rotulo:
for (let i in notas){
    for (let x in notas){
        if (i == 2 && x == 3){
            break rotulo;
        }
        console.log("PAR:", i, x);
    }
}