function exercicioFisico(tempo,disposicao){
    const irAndar = tempo && disposicao;
    const nadar = disposicao || tempo;
    const jogarBola = tempo && disposicao

    return {irAndar,nadar,jogarBola}
}

console.log(exercicioFisico(true,false))