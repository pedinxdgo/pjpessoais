const prompt = require("prompt-sync")();
let numero = Number(prompt("Digite um número: "));
let multiplicador = 0

for (let i = 1; i <= 10; i++) {
    
    multiplicador++
    let resultado = numero * multiplicador
    console.log(`${numero} x ${multiplicador} = ${resultado}`);
}




