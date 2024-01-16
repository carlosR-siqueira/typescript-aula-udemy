// string

let nome: string = 'joão'

console.log(nome);

// nome = 28



// numbers

let idade: number = 27

// idade = 'ana'

idade = 27.5

console.log(idade);



// boolean

let possuiHobbies: boolean = false
// possuiHobbies = 1

console.log(possuiHobbies);


//tipos explícitos 

let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade);
// minhaIdade = 'idade 27'


//arrays

let hobbies: any[] = ["cozinhar", "praticar Esportes"]
console.log(hobbies[0]);
console.log(typeof hobbies );

hobbies = [100, 200, 300]
console.log(hobbies);


// tuplas 

let endereco: [string, number, string] = ["Av principal", 99, ""]

console.log(endereco);

endereco = ["rua Importante", 1260, "bloco c"]

console.log(endereco);



//enums

enum cor{
    cinza,
    verde = 100,
    azul = 10,
    laranja,
    amarelo,
    vermelho = 100
}


let minhaCor: cor = cor.verde
console.log(minhaCor);

console.log(cor.azul);
console.log(cor.laranja, cor.amarelo);
console.log(cor.verde, cor.vermelho);


//any

let carro: any = 'BMW'

console.log(carro);

carro = {marca: 'BMW' , ano: 2019}
console.log(carro);







