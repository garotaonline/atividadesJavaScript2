contar = (caractere, frase) => {
    minusculo = frase.toLowerCase()
    vezes = 0
    for(let i = 0; i <= minusculo.length; i++) {
        if(minusculo[i] == caractere) {
            vezes++
        }
    }
    return console.log(vezes)
}

contar("r", "A sorte favorece os audazes")