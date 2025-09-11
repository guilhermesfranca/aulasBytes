// desafio 01 - vamos até 19h é o limite de envio do desafio
//Podem se ajudar

//O grande Galo

/*
 vamos lá:

eu preciso criar uma classe que servirá de base para uma implementação do jogo do Galo (jogo da velha)

logo o objeto representa um objeto como esse em estado inicial

{
tabuleiro: [
	["_","_","_"],
	["_","_","_"],
	["_","_","_"],
]
}

e agora como esse em um estado onde o jogador X venceu
{
tabuleiro: [
	["X","_","O"],
	["O","X","O"],
	["_","_","X"],
]
}


o objeto só tem as propriedades tabuleiro e jogador atual

tenho que acrescentar os metodos: 

adicionarJogada(linha, coluna) - esse método tem de retornar o proprio jogo com um *NOVO* tabuleiro em que coloca o simbolo do jogadorAtual na linha e coluna passadas como argumento


só pode ser colocado o simbolo caso a posição não tenha sido ainda escolhida, ou seja, se for igual a _.

também deve trocar o jogadorAtual a cada vez que a jogada seja adicionada


também deve estar passado como metodo a função obterJogadasPOssiveis() = que é um metodo que le o jogo e retorna um array com objetos que tem duas propriedades linha e coluna e cada objeto representa uma posição livre (ou seja, uma posição onde é igual a "_".


metodo verificarVencedor() = esse metodo le o jogo e retorna uma string com o simbolo do jogador vencedor ou undefined se não existir um vencedor


verificarFimDoJogo(): metodo que le o jogo e caso ele esteja finalizado retorna um true ou false


 */

class JogoDoGalo {
  constructor(tabuleiro, jogadorAtual) {
    this.tabuleiro = tabuleiro ||  [
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ];
    this.jogadorAtual = "X" || jogadorAtual;
  }

  /* 
    ========= PRIMEIRO METODO ===========
  */
  adicionarJogada(linha, coluna) {
    if (this.tabuleiro[linha][coluna] !== "_") {
      console.log("Posição já ocupada!");
      return this; // Sai sem fazer nada
    }

    let tabuleiroNovo = [...this.tabuleiro];
    tabuleiroNovo[linha][coluna] = this.jogadorAtual;
    this.tabuleiro = tabuleiroNovo;
    if (this.jogadorAtual === "X") {
      this.jogadorAtual = "O";
    } else {
      this.jogadorAtual = "X";
    }
    return this;
  }
  /* 
    ========= fim do PRIMEIRO METODO ===========
  */

  /* 
    ========= SEGUNDO METODO ===========
  */
  obterJogadasPossíveis() {
    const posicoesLivres = [];

    // Loop para percorrer as linhas
    for (let linha = 0; l < 3; l++) {
      for (let coluna = 0; c < 3; c++) {
        if (this.tabuleiro[l][coluna] === "_") {
          posicoesLivres.push({ linha: l, coluna: c });
        }
      }
    }

    return posicoesLivres;
  }
  /* 
    ========= FIM DO SEGUNDO METODO ===========
  */

  /* 
    ========= TERCEIRO METODO ===========
  */

  verificarVencedor() {
    // 1. Verificar linhas horizontais
    for (let linha = 0; linha < 3; linha++) {
      if (
        this.tabuleiro[linha][0] === this.tabuleiro[linha][1] &&
        this.tabuleiro[linha][1] === this.tabuleiro[linha][2] &&
        this.tabuleiro[linha][0] !== "_"
      ) {
        // Temos vencedor! Retorna o símbolo
        return this.tabuleiro[linha][0];
      }
      // E não for "_", então temos vencedor!
    }

    // 2. Verificar colunas verticais
    for (let coluna = 0; coluna < 3; coluna++) {
      if (
        this.tabuleiro[0][coluna] === this.tabuleiro[1][coluna] &&
        this.tabuleiro[1][coluna] === this.tabuleiro[2][coluna] &&
        this.tabuleiro[0][coluna] !== "_"
      ) {
        // Temos vencedor! Retorna o símbolo
        return this.tabuleiro[0][coluna];
      }
    }

    // 3. Verificar diagonais

    //primeira diagonal
    if (
      this.tabuleiro[0][0] === this.tabuleiro[1][1] &&
      this.tabuleiro[1][1] === this.tabuleiro[2][2] &&
      this.tabuleiro[0][0] !== "_"
    ) {
      return this.tabuleiro[0][0];
    }

    //segunda diagonal
    if (
      this.tabuleiro[0][2] === this.tabuleiro[1][1] &&
      this.tabuleiro[1][1] === this.tabuleiro[2][0] &&
      this.tabuleiro[0][2] !== "_"
    ) {
      return this.tabuleiro[0][2];
    } else {
      let resultadoFinal = undefined;
      return undefined; // Se chegou aqui, não há vencedor
    }
  }

  /* FIM DO TERCEIRO METODO */

  /* INICIO QUARTO METODO */
  verificarFimDoJogo() {
    const vencedor = this.verificarVencedor();
    if (vencedor !== undefined) {
      return true; // Há vencedor
    }

    const jogadasPossíveis = this.obterJogadasPossíveis();
    if (jogadasPossíveis.length === 0) {
      return true; // Empate - não há mais jogadas
    }

    return false; // Jogo continua
  }
}

let jogo = new JogoDoGalo();
//jogo = jogo.adicionarJogada(0, 0); //X
jogo = jogo.adicionarJogada(1, 1); //O
jogo = jogo.adicionarJogada(1, 0); //X
jogo = jogo.adicionarJogada(2, 2); //O
jogo = jogo.adicionarJogada(2, 0); //X
jogo = jogo.adicionarJogada(0,0) // O
console.log(jogo.verificarVencedor());

console.log(jogo.verificarFimDoJogo());
// true

console.log(jogo);
