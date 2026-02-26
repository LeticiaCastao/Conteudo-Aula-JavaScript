//Exemplo de operador de atribuição
let x = 10;
x = x + 5;
x = x + 5;

console.log(x);

let y = 10;
y = y + 5;

console.log(y);

//Exemplos de aritmetica em JavaScript
let soma = 5 + 5 + 4;

console.log(soma);

const primeiroNome = "Letícia";
const ultimoNome = "Castão"; //Pode deixar um espaco aqui também para nao ficar tudo junto
let nomeCompleto = primeiroNome + " " + ultimoNome;

console.log(nomeCompleto);

let teste = false;

if (teste === true) {
    console.log("A variável teste é verdadeira!");
} else {
    console.log("A variável teste é FALSA!");
}

//Exemplo de tipos em JavaScript
//String

let cor = "azul";
let fruta = "Uva";

console.log(cor);
console.log(fruta);

//Number

let soma1 = 5 + 5;
let subtracao = 10 - 3;
console.log(soma1);
console.log(subtracao);

//BigInt

let bigInt1 = 1234567890123456789012345n;
let bigInt2 = BigInt(1234567890123456789012345);

console.log(bigInt1);
console.log(bigInt2);

//Boolean

let valorVerdadeiro = true;
let valorFalso = false;
console.log(valorVerdadeiro);
console.log(valorFalso);

//Object

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    cor: "Prata"
};

console.log(carro);

console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.cor);

//Array

const frutas = ["Maçã", "Banana", "Laranja", "Abacaxi", "Uva"];

console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
//console.log(frutas.length);

//Data object

const data = new Date;
console.log(data);

//Undefined

let Indefinido;
console.log(Indefinido);

//Null

let nulo = null;
console.log(nulo);

//Symbol

let z = Symbol();
console.log(z);

//Exemplo de Typeof

let stringTipo = "300";
let numberTipo = 300;

//const tipoDado = typeof stringTipo;
const tipoDado = typeof numberTipo;

console.log(tipoDado);

//Exemplos de Boolean
let cinco = 5;
let comparacao = cinco == 8

console.log(comparacao);
