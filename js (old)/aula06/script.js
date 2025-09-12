/*
Exercício 4 – Inventário de RPG 
Crie um array personagens, onde cada personagem é um objeto com:

nome, classe (ex: guerreiro, mago), nivel (número), itens (array com strings)

Adicione 3 personagens com diferentes classes, níveis e 3 itens cada.

Aumente o nível de todos os magos em +2.

Para todos os personagens com nível maior que 5, adicione o item "Poção de Força".

Crie uma função chamada mostrarInventario que recebe o nome de um personagem e exibe todos os seus itens em lista.

Remova todos os personagens que não possuem o item "Espada" (mesmo que seja apenas em um dos slots).

Exiba o array final com os personagens restantes.


*/


let personagens = [
  {
    nome: "Dumbledore",
    classe: "mago",
    nivel: 25,
    itens: ["varinha", "capa", "vassoura"],
  },
  {
    nome: "Arthur",
    classe: "mago",
    nivel: 15,
    itens: ["espada", "armadura", "escudo"],
  },
  {
    nome: "Ash",
    classe: "caçador",
    nivel: 17,
    itens: ["pikachu", "pokedex", "pokebola"],
  },
];


// Adicionar nível +2 em cada objeto que tenha classe mago
personagens.forEach((personagem) => {
  if (personagem.classe === "mago") personagem.nivel += 2;
  console.log(personagem.nivel);
});

//adicionar o item "Poção de força" em cada personagem que tenha força maior que 5
personagens.forEach((personagem) => {
    if (personagem.nivel >= 5) personagem.itens.push('poção de força');
    console.log(personagem.itens);
});


// exibindo somente personagens que possuem item "espada" no inventario
personagens = personagens.filter(personagem => personagem.itens.includes("espada"));
console.log(personagens);

// Deixar o array.map para estudar mais tarde


/*

Exercício 4 – Inventário de RPG (Resumo)
Criamos um array de personagens, cada um com nome, classe, nível e itens. Usamos .forEach() para:

Aumentar +2 no nível de quem é mago.

Adicionar “poção de força” para quem tem nível maior ou igual a 5.

Depois, usamos .filter() para manter só os personagens que possuem o item “espada”.

A parte da função mostrarInventario foi pulada, pois ainda não estudamos criação de funções em JavaScript.


*/