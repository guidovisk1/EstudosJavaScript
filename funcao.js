//Funcao sem retorno
function imprimirSoma(a,b){
    console.log(a + b)
}
imprimirSoma(4,6)

//Funcao com retorno
function imprimirSubtracao(a, b = 1){ //Deixar  como padrão o 1 se não for passado
    return a - b 
}
console.log(imprimirSubtracao(10))