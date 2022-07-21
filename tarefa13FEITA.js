numeros = array => {
    novaArray = []
    for(let item of array) {
        if(typeof item === "number") {
            novaArray.push(item)
        } 
    }
    return console.log(novaArray)
}

numeros(["web", 2, 3, "numero", 9])