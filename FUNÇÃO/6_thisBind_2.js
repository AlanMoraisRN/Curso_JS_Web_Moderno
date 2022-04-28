function Pessoa(){
    this.idade = 0;

    const self = this; //CONSTANTE CRIADA PARA ARMAZENAR O THIS DENTRO DA FUNÇÃO PARA O MÉTODO SER CORRETAMENTE CHAMADO
    setInterval(function(){
        self.idade++;
        console.log(self.idade);
    }/*.bind(this)*/, 1000); //MÉTODO BIND USADO COMO PRIMEIRA OPÇÃO -- VOU ADOTAR O BIND
}

new Pessoa;