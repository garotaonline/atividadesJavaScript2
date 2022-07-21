aleatorio = (min = 1, max = 10) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

sortear = (numero, callback) => {
    if(numero === callback) {
        return console.log(`Parabéns! O numero sorteado foi ${callback}`)
    } else {
        return console.log(`Que pena! O numero sorteado foi ${callback}`)
    }
}

sortear(3, aleatorio())