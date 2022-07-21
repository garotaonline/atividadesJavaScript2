remover = (objeto, elemento) => {
    delete objeto[elemento]
    return console.log(objeto)
}

remover({"a": 1, "b": 2, "c": 3}, "b")