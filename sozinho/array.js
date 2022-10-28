let listaAlunos = ['Ana','Juba','Mel','Ferpa']

console.log(listaAlunos)
console.log(listaAlunos[3])
console.log(listaAlunos.push('João'))
console.log(listaAlunos)
console.log(listaAlunos.length)

function AdicionarNome(nome){
    console.log(listaAlunos.push(nome))
}

AdicionarNome('Felipe')
console.log(listaAlunos)

let listaNotaAlunos = [10,9,3,5,6]
console.log(listaNotaAlunos)
console.log(listaNotaAlunos[2])
console.log(listaAlunos.pop())
console.log(listaAlunos)