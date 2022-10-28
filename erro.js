function tratarErroELancar(erro){
    //throw new Error('..')
    //throw 10

}

function imprimirNomeGritando(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch(e){
        tratarErroELancar(e)
    }
    finally{
        console.log('Final')
    }
}

const obj = {nome: 'Roberto'} // É pra dar erro propositalmente

imprimirNomeGritando(obj)