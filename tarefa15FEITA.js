arrayNumeros = array => {
    novaArray = []
    array.filter((numero, indice) => {
       if(numero % 2 === 0 && indice % 2 === 0)
       return novaArray.push(numero)
    });
    return console.log(novaArray)

}

arrayNumeros([1, 3, 5, 6])