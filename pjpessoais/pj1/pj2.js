const prompt = require("prompt-sync")();
let n1 = Number(prompt("Digite um numero: "));
let n2 = Number(prompt("Digite outro numero: "));
if (n1 > n2){
    console.log(`O numero ${n1} e maior que o numero ${n2}`)
}
else{
    console.log(`O numero ${n2} e maior que o numero ${n1}`)

}

