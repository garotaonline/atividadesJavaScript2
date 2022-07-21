retonar = valor => {
    if(valor === "true") {
        return console.log(`false`)
    } else if(valor === "false") {
        return console.log(`true`)
    } else if(valor > 0) {
        valor = valor * -1
        return console.log(valor)
    } else if(valor < 0) {
        valor = valor * -1
        return console.log(valor)
    }
}

retonar(12)