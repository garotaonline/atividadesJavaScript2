somar = array => {
   array.reduce((acumulador, numero) => {
    soma = acumulador + numero
    return soma
   })
   return console.log(soma)
}

somar([2, 2, 2])