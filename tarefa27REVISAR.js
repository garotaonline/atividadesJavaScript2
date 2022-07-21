inverter = objeto => {
    pares = Object.entries(objeto).map( par => par.reverse())

    return console.log(Object.fromEntries(pares))
}

inverter({ a: 1, b: 2, c: 3})