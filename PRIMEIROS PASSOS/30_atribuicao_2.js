//USANDO NOVO RECURSO DO ES2015 - OPERADOR DESTRUCTURING
const curriculum = {
    nome: "Alan Morais",
    idade: 32,
    altura: 1.76,
    endereco: {
        logradouro: "Avenida José Gastel B Pereira",
        bairro: "Centro",
        numero: 203,
        cep: "59.350-000"
    },
    experiencia: {
        job1: "Monitor - EIDC",
        job2: "Estagiário - SEBRAE/PB",
        job3: "Instrutor - SENAI"
    },
    escolaridade: "Superior Completo",
    estadoCivil: "Solteiro",
}

const { nome, experiencia, escolaridade } = curriculum; //DESESTRUTURANDO O OBJETO PARA RETORNAR APENAS ALGUNS ATRIBUTOS
console.log(nome, experiencia.job3, escolaridade);
console.log(" ");

const { nome: n, experiencia: e, escolaridade: s } = curriculum; //ATRIBUINDO VARIÁVEIS AOS ATRIBUTOS PARA DESESTRUTURAR
console.log(n, e.job1, s);
console.log(" ");

const { endereco: { logradouro, numero } } = curriculum;
console.log(logradouro, numero);
console.log(" ");

const { altura, estadoCivil } = curriculum;
console.log(altura, escolaridade);
console.log(" ");