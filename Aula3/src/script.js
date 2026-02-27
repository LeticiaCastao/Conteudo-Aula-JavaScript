//Exemplo de Condição Logica: If e Else

let x = 8;

if (x == 5) {
    //console.log("A variável x é igual a 5");
} else {
    //console.log("A variável x não é igual a 5!");
}

//Exemplo de Condição Lógica: If Else If
let y = 10;

if (y > 3) {
    console.log("Variável y é maior que 3!");
} else if (y == 3) {
    console.log("A variável y é igual a 3.");
} else {
    console.log("A variável y possui um valor diferente das verificações.")
}

//Exemplo de if
const elemento = document.getElementById("ex1");
const pegarHoras = new Date().getHours();
const pegarMinutos = new Date().getMinutes();
const hora = String(pegarHoras) + ":" + String(pegarMinutos);

if (pegarHoras > 18) {
    elemento.innerHTML = "Boa noite!"
}

//Exemplo if 2
let idade = 20
let texto = "Você é novo demais para dirigir!";

if (idade >= 18) {
    texto = "Você tem idade para dirigir!";
}

document.getElementById("idade").innerHTML = "Sua idade é: " + idade;
document.getElementById("ex2").innerHTML = texto;
