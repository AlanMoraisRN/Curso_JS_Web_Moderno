function rand ({ min = 0, max = 1000 }) {
    const valor = Math.random () * (max - min) + min;
    return Math.floor (valor); //MATH.FLOOR FUNÇÃO PARA ARREDONDAR O NÚMERO PARA BAIXO
}

const obj = { max: 100, min: 10}
console.log(rand(obj));
console.log (rand({ min: 955}));
console.log (rand({}));
