filtrar = (numeros, quantidade) => {
    return console.log(numeros.filter(numero => {
        const quantidadeDigito = String(numero).length

        return quantidadeDigito === quantidade
    }))
}

filtrar([10, 7, 4, 40, 50], 2)