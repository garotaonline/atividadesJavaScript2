salario = (horas, salarioHora) => {
    conta = horas * salarioHora
    return console.log(`Salário igual a R$${conta}`)
}

salario(150, 40.5)