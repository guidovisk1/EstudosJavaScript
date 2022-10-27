// Novo recurso do ES2015

const pessoa = {
    nome: 'Juba',
    idade: 14,
    endereco: {
        logradoutro: 'Rua ABC',
        Numero: 1000
    }
}

const {nome,idade} = pessoa
console.log(nome,idade)

const {nome: n,idade: i} = pessoa
console.log(n,i)