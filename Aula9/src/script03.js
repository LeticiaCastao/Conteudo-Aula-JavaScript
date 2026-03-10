// Utilizando o BigInt
let a = BigInt("182734192841986364865876643964638765946979449756876387654397675643976975369746986395659652347895875984598684392951797490413490817720398471");
console.log(a);

// Utilizando n
let b = 19284198636486587664396463876594697944975687638765439767564397697536974698639565965234n;
console.log(b);

// Utilizando operadores aritméticos com BigInt
let c = 2384678365876976398464639653n;
let d = 2384678365876976398464639653n;
let e = (c * d);
console.log(e);

// Convertendo BigInt
let f = BigInt("99836598643978398369347986");
let fConvertido = Number(f);
console.log(fConvertido);

// Utilizando métodos de comparação em BigInt
let g = 100n;
let h = 90n;
let exComparacao = (g === h);
console.log(exComparacao);