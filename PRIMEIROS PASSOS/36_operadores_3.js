//USANDO OPERADORES LÓGICOS

function compras (job1, job2) {
    const iceCream = job1 || job2;
    const tv50 = job1 && job2;
    //const tv32 = !!(job1 ^ job2); OPERADOR BITWISE XOR
    const tv32 = job1 != job2;
    const fitness = !iceCream;

    return { iceCream, tv50, tv32, fitness };
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));