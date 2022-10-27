console.log(Math.floor(6,4))

const obj1 = {};
obj1.nome = 'Mel';
console.log(obj1.nome);

function Obj(Nome){
    this.nome = Nome
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Mane');
console.log(obj2.nome)
obj2.exec()
