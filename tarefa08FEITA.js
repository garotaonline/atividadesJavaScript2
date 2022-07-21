 multiplicacao = (numeroUm, numeroDois) => {
    soma = 0

    for(let i = 1; i <= numeroDois; i++) {
        soma = soma + numeroUm
    }

    return console.log(soma)
 }

 multiplicacao(3, 2)
