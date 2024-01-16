"use strict";
// string
let nome = 'joão';
console.log(nome);
// nome = 28
// numbers
let idade = 27;
// idade = 'ana'
idade = 27.5;
console.log(idade);
// boolean
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
//tipos explícitos 
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade 27'
//arrays
let hobbies = ["cozinhar", "praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
console.log(hobbies);
// tuplas 
let endereco = ["Av principal", 99, ""];
console.log(endereco);
endereco = ["rua Importante", 1260, "bloco c"];
console.log(endereco);
//enums
var cor;
(function (cor) {
    cor[cor["cinza"] = 0] = "cinza";
    cor[cor["verde"] = 100] = "verde";
    cor[cor["azul"] = 10] = "azul";
    cor[cor["laranja"] = 11] = "laranja";
    cor[cor["amarelo"] = 12] = "amarelo";
    cor[cor["vermelho"] = 100] = "vermelho";
})(cor || (cor = {}));
let minhaCor = cor.verde;
console.log(minhaCor);
console.log(cor.azul);
console.log(cor.laranja, cor.amarelo);
console.log(cor.verde, cor.vermelho);
//any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
