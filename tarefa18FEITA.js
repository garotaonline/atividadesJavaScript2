aplicacao = array => {
    array.map(a => a.preco).reduce((acumulador, valor) => {
        soma = acumulador + valor
        return soma
    })
    return console.log(soma)
}

aplicacao([{nome: "jornal", categoria: "informação", preco: 80.99}, {nome: "cinema", categoria: "entreterimento", preco: 150}])