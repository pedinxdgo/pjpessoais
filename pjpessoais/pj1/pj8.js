const prompt = require("prompt-sync")();
let numero1 = Number(prompt("Digite um numero: "));
let numero2 = Number(prompt("Digite outro numero: "));
console.log("============ 1 - Adição =============");
console.log("============ 2 - Subtração =============");
console.log("============ 3 - Divisão =============");
console.log("============ 4 - Multiplicação =============");
let operacao = prompt("Escolha uma operação: ")
if(operacao == 1){
    let soma = numero1 + numero2
    console.log(`O resultado e ${soma}`)
}
else if(operacao == 2){
    let menos = numero1 - numero2
    console.log(`O resultado e ${menos}`)
}
else if(operacao == 3){
    let div = numero1 / numero2
    console.log(`O resultado e ${div.toFixed(2)}`)
}
else{
    let vezes = numero1 * numero2
    console.log(`O resultado e ${vezes}`)
}

