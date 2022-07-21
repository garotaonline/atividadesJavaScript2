retornarArray = array => {
    primeiro = array.shift()
    ultimo = array.pop()
    return console.log([primeiro, ultimo])
}

retornarArray([7, 2, 3, 8, 4])