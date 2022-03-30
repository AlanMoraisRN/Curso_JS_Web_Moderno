//USANDO ESTRUTURAS DE CONTROLE - IF

function calcularNota (nota){
    if (nota >= 7){
        console.log("Aprovado! Sua nota foi: ".concat(nota));
    }
}

calcularNota(8.1);
calcularNota(6.1);

function testarNota(valor){
    if (valor){
        console.log("Testando a nota... ".concat(valor));
    }
}

//EXECUTA APENAS OS BLOCOS TRUE
testarNota ();
testarNota (null);
testarNota (undefined);
testarNota (NaN);
testarNota ("");
testarNota (0);
testarNota (-1);
testarNota (" ");
testarNota ("?");
testarNota ([]);
testarNota (1, 2);
testarNota ({});