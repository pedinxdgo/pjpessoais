const prompt = require("prompt-sync")();

let maior = Number(prompt("Digite um número:"));
let num2 = Number(prompt("Digite outro número:"));
let num3 = Number(prompt("Digite mais um número:"));
if (maior < num2){
    maior = num2;
}
else if (maior < num3){
    maior = num3;
}
else{
    maior = maior
}
console.log(`o maior numero e: ${maior}`)
