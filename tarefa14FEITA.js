retornar = objeto => {
    array = []
    Object.entries(objeto).forEach(valor => {
       console.log (valor)
    })
}

retornar({
    nome: "Maria",
    profissao: "Desenvolvedora"
})