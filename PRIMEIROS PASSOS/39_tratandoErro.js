//TRATAMENTO DE ERROS USANDO TRY, CATCH E THROW

/*
 * TRY BLOCO DE CÓDIGO QUE POTENCIALMENTE PODE GERAR UM TIPO DE ERRO
 * CATCH BLOCO DE CÓDIGO PARA TRATAR OU RELANÇAR O ERRO
 * FINALLY SEMPRE SERÁ EXECUTADO
 * THROW MOSTRA COMO ESTÁ SENDO TRATADO O ERRO
 */

function tratarErro (erro) {
    //throw new Error ("ESTAMOS TRATANDO OS ERROS OCORRIDOS");
    throw {
        message: "ERRO OCORRIDO",
        data: new Date()
    }
}

function consultaNome (obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!"); //DECLARAÇÃO NAME DIFERENTE DO INSTANCIADO EM OBJ COMO NOME
    } catch (e) {
        tratarErro(e)
    } finally {
        console.log("ERROS ENCONTRADOS DURANTE A EXECUÇÃO DO PROGRAMA!");
    }
}

const obj = {
    nome: "Alan"
}

consultaNome(obj);