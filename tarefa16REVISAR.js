calendario = ano => {
    quatro = ano % 4 == 0
    cem = ano % 100 == 0
    quatrocentos = ano % 400 == 0 
    return console.log((quatro && !cem) || quatrocentos)
}

calendario(2100)