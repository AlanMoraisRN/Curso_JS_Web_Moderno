//THIS E BIND

const pessoa = {
    saudar: "Olá, bom dia!",
    falar(){
        console.log(this.saudar);
    }
}

pessoa.falar();
const falar = pessoa.falar;
falar(); //CONFLITO DE PARADIGMA: FUNCIONAL E ORIENTAÇÃO A OBJETO

const falatorio = pessoa.falar.bind(pessoa); //BIND É RESPONSÁVEL POR AMARRAR DETERMINADO OBJETO
falatorio();

const falar2 = pessoa.falar;
falar2(); //DEMONSTRAR QUE A FUNÇÃO FALAR NÃO FOI ALTERADA PELA CHAMADA DO MÉTODO BIND