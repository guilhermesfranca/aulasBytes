//ex01

console.log("criar array que cria um novo array com o tamanho das strings");
let array = ["asf", "asds", "ads", "adfas"];

let newArr = array.map((e) => e.length);

console.log(newArr);

//ex 02

console.log(
  "array que filtra os elementos pares de um array, e depois mapeia cada elemento para o seu quadrado (elevado a dois) e depois reduz para um somatorio geral"
);

let arr = [2, 4, 6, 8, 3, 5, 7, 9];

let pares = arr.filter((p) => p % 2 === 0);
let quadrado = pares.map((q) => q * q);
console.log(quadrado);
let somatorio = quadrado.reduce((acc, e) => acc + e, 120);

console.log(somatorio);

//outra forma de fazer é vc pegar tudo por uma função direta

let pares2 = arr
  .filter((p) => p % 2 === 0)
  .map((q) => q * q)
  .reduce((acc, e) => acc + e, 0);

console.log(pares2);

//ex03

console.log("cria um array de strings, em um array de string invertidas");
const arr3 = ["tres", "Quatro", "Cinco"];

let inverted = arr3.map((str) => str.split("").reverse().join(""));

console.log(arr3);
console.log(inverted);

//ex04

console.log(
  "cria uma função que retorna true se todos os elementos do array forem pares"
);

function verificaPares(array) {
  return console.log(array.every((e) => e % 2 === 0));
}

verificaPares([2, 4, 6, 8]);

//ex 05
console.log(
  "Cria uma função que retorna true se pelo menos um dos elementos do array for par"
);

function temPar(array) {
  console.log(array.some((e) => e % 2 === 0));
}

temPar([1, 3, 5, 7, 2]);

//ex06
console.log(
  "Cria uma função que mapeia cada elemento de um array de obj com as propriedades name e birthday para um objeto que além destas propriedades a propriedade age"
);

function withAge(array) {
  return array.map((e) => ({
    ...e,
    age: 25,
  }));
}

console.log(withAge([{ name: "Ana", birthday: "2000-05-10", age: 25 }]));
 