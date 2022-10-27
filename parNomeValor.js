const saudacao = 'opa'; //Contexto léxico 1

function exec() {
    const saudacao = 'hey';
    return saudacao //Contexto léxico 2
}

const cliente = {
    nome: 'Fe',
    idade: 18,
    peso: 67,
    endereco: {
        rua: 'peroba',
        numero: 273
    }
}

console.log(saudacao);
console.log(exec())
console.log(cliente)
