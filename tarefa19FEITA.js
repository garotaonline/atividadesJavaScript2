media = array => {
    array.reduce((acumulador, numero) => {
        soma = acumulador + numero
        return soma
    })
    divisao = soma / array.length
    return console.log(divisao)
}

media([1, 2, 3, 4, 5])