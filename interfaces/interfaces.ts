interface Humano{
    nome: string
    idade?: number
    [prop: string]:any
    saudar(sobrenome: string): void

}

function saudarComOla(pessoa: Humano){

    console.log('olá, ' + pessoa.nome);
    
}

function mudarNome(pessoa: Humano){
    pessoa.nome = "joana"
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string){
        console.log('olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }

}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
// saudarComOla({nome: 'jonas', idade: 27, altura: 1.75})
pessoa.saudar('Skywalker')


// Usando Classes...

class Cliente implements Humano{
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string) {
        console.log('olá, meu nome é ' + this.nome + ' ' + sobrenome);
        
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'han'
saudarComOla(meuCliente)
meuCliente.saudar('solo')
console.log(meuCliente.ultimaCompra);

//interface função


interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number{
    return Array(exp).fill(base).reduce((t , a) => t * a)
}

console.log(potencia(3, 10));

