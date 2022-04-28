//USO DE ARROW FUNCTION

let dobro = function(a){
    return 2 * a;
}

dobro = (a) => { //QUANDO USA-SE ARROW FUNCTION COM CHAVES É OBRIGATÓRIO O USO DO RETURN, CASO CONTRÁRIO RETORNA UNDEFINED
    return 2 * a;
}

dobro = a => 2 * a; // RETURN É IMPLÍCITO

console.log(dobro(Math.PI));

let ola = function (){
    return "Olá!";
}

ola = () => "Olá!";

ola = () => { //ADOTAREI ESSE TIPO DE SINTAXE PARA FUNCÃO ARROW
    return "Olá!";
}

console.log(ola());

const valor = (a, b, c) => {
    return a + b + c;
}

console.log(valor(1, 2, 3));

let media = (n1, n2, n3, n4) => {
    
    let resultado = (n1 + n2 + n3 + n4) / 4;

    if (resultado >= 7){
        console.log("APROVADO!");
    }else if (resultado < 7 && resultado >= 5){
        console.log("EM RECUPERAÇÃO!");
    }else{
        console.log("REPROVADO!");
    }
    
    return resultado;
}

console.log(media(7, 8, 6, 9, 7));