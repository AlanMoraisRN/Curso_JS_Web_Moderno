//USANDO VARIÁVEL VAR
{
    {
        {
            {
                var sera = "E agora, José?";
            }
        }
    }
}
console.log(sera);

function teste() {
    var local = 123;
    console.log(local);
    console.log(sera);
}

teste();
console.log(local); // ERRO, LOCAL ESTÁ DEFINIDO DENTRO DE UMA FUNÇÃO, ONDE A MESMA ESTÁ FORA DO ESCOPO GLOBAL