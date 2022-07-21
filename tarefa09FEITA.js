repetir = (elemento, vezes) => {
    array = []
    for(let i = 0; i <+ vezes; i++) {
        array.push(elemento)
    }
    return console.log(array)
}

repetir(7, 3)