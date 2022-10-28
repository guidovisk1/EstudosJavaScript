

function Aluno(nome,idade,serie){
    this.nome = nome,
    this.idade = idade,
    this.serie = serie
}


const aluno1 = new Aluno(
    'JOao',
    12,
    5
)
const aluno12 = new Aluno(
    'JOao',
    12,
    
)

console.log(aluno1.nome)
console.log(aluno12)

if(aluno1.nome === 'Felipe'){
    console.log('Seu nome realmente é Felipe')
}
else{
    console.log('Não é Felipe')
}

let listaAlunos = ['Julia','Enzo','Pox','Natan']

for(i = 0; i < listaAlunos.length; i++){
    console.log(`${i} = ${listaAlunos[i]}`)
}