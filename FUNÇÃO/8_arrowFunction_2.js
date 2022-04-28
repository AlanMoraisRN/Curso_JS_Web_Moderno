//USO DO THIS NO MESMO CONTEXTO DO EXMEPLO ANTERIOR COM O USO DO ARROW FUNCTION

function Pessoa(){
    this.idade = 0;

    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000);
}

new Pessoa;