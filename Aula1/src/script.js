//Exemplo de variável let

console.log("Testando JavaScript");

let nome = "Letícia";

let nome2 = "Leth";

console.log(nome);
console.log(nome2);

//Exemplo de variável const

const times = ["Palmeiras", "Atlético-MG", "Grêmio", "São Paulo"];

console.log(times)
console.log(times[0])
console.log(times[1])
console.log(times[2])
console.log(times[3])
console.log(times[4]) //undefined, pq não existe 

console.log(times.length) //esta contando quantos itens tem na lista

console.log(times[times.length - 1]) //esta contando quantos itens tem na lista, mas subtraindo 1, para mostrar o último item da lista, que é o Grêmio.