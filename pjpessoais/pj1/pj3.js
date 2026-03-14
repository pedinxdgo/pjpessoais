const prompt = require("prompt-sync")();
let nota1 = Number(prompt("Digite a primeira nota do aluno: "))
let nota2 = Number(prompt("Digite a segunda nota do aluno: "))
const media = (nota1 + nota2) /2
if (media >= 7.0) {
    console.log(`A media e ${media.toFixed(2)}`)
    console.log("Aluno Aprovado")
}
else if (media <7.0 && media >=5.0) {
    console.log(`A media e ${media.toFixed(2)}`)
    console.log("Aluno Em Recuperção")
}
else {
    console.log(`A media e ${media.toFixed(2)}`)
    console.log ("Aluno Reprovado")
}




