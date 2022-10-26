const valores = [1,2,8,6.7,2.5];
console.log(valores[1], valores[4])
valores[9] = 10
console.log(valores)

valores.push(4.9)
console.log(valores)
console.log(valores.pop())
delete valores[0]

console.log(valores) 