buscar = (inicio, palavras) => {
    return console.log(palavras.filter(palavra => palavra.includes(inicio)))
}

buscar("pro", ["procurar", "programação", "javascript"])