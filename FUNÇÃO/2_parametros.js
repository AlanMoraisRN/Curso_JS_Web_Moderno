//USANDO FUNÇÕES E RETORNOS

function area (largura, altura){
    const area = largura * altura;
    if (area > 20){
        console.log("VALOR ACIMA DO PERMITIDO: ".concat(area).concat("M²"));
    } else {
        return area;
    }
}
 
console.log (area (2, 3));
 console.log (area (2));
 console.log (area ());
 console.log (area (2, 3, 17, 22, 44));
 console.log (area (5, 5));