retornar = (minimo, maximo, numero, inclusivo = false) => {
    if(inclusivo) return numero >= minimo && numero <= maximo
    
    return console.log(numero > minimo && numero < maximo)
}

retornar(10, 100, 50)