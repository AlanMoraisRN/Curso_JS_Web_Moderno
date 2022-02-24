//NOTAÇÃO PONTO
console.log(Math.ceil(6.1));

const obj1 = {
    nome: "Bola",
    valor: 350.00
}

console.log(obj1.nome);

function Material (nome){
    this.nome = nome;
    this.valor = function () {
        console.log(50.00.toFixed(2));
    }
}

function Investimento (valor) {
    this.valor = valor;
}

const obj2 = new Material ("Cadeira");
const obj3 = new Investimento (350.00.toFixed(2));
const obj4 = new Material;

console.log(obj2.nome);
console.log(obj3.valor);

obj4.valor();
