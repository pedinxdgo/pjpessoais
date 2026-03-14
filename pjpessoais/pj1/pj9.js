const prompt = require("prompt-sync")();
let numeroSecreto = Math.floor(Math.random() * 10) + 1
let numero1
while(numero1 != numeroSecreto){
    numero1 = Number(prompt("Tente adivinhar o numero aleatorio de 1 a 10: "));
    if(numero1 == numeroSecreto){
        console.log("Você acertou")
    }
    else{
        console.log("Você errou! Tente novamente")
    }
}