const prompt = require("prompt-sync")();
let par = 0
let impar = 0

for(i = 0; i <10; i++){
let numeros = Number(prompt("Digite 10 numeros: "))
if(numeros % 2 == 0){
    par++
}
else{
    impar++
}
}
console.log(`Voce digitou ${par} numeros pares e ${impar} numeros impares`)