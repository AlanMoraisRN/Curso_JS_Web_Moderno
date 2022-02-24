let a = 0;
let soma;

for(let i = 0; i < 10; i++) {
    soma = i + a;
    a++;
}
console.log(a);
//console.log(i); //ERRO, POIS A VARIÁVEL i FOI DEFINIDA FORA DO ESCOPO GLOBAL
console.log(soma);