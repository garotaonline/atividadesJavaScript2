segundoMaior = array => {
    numerosOrdenado = array.sort((um, dois) => dois - um)
    segundo = numerosOrdenado[1]
    return console.log(segundo)
}



segundoMaior([12, 16, 1, 5])