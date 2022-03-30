function teste1 (num){
    if (num > 7){
        console.log (num);
    }
    console.log("Final!");
}

teste1 (6);
teste1 (8);

//DEFININDO CORPO DE DECISÃO DO BLOCO IF
function teste2(num){
    if(num > 7); { //CUIDADO AO USAR O ; DENTRO DO BLOCO IF OU QUALQUER OUTRO BLOCO DE DECISÃO/REPETIÇÃO
        console.log(num);
    }
    
}

teste2(6);
teste2(8);

/**
 * HAVENDO UMA ÚNICA SENTENÇA DE CÓDIGO DENTRO DOS BLOCOS DE
 * DECISÃO OU DE REPETIÇÃO, O USO DAS CHAVES É OPCIONAL.
 */