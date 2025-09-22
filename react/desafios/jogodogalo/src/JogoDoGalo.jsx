import { useState } from "react";

// Hook useJogoDoGalo (o teu código)
const casaVazia = " ";
const jogoVazio = {
    tabuleiro: [
        [casaVazia, casaVazia, casaVazia],
        [casaVazia, casaVazia, casaVazia],
        [casaVazia, casaVazia, casaVazia],
    ],
    jogadorAtual: "X"
};

function useJogoDoGalo() {
    
    const [state, setState] = useState(jogoVazio);

    function adicionarJogada(jogo, jogador, linha, coluna) {
        setState(estadoAnterior => {
            // Verificar se a casa está vazia
            if (estadoAnterior.tabuleiro[linha][coluna] !== casaVazia) {
                return estadoAnterior; // Não fazer nada se casa ocupada
            }
            
            // Criar novo tabuleiro com cópia profunda
            const novoTabuleiro = estadoAnterior.tabuleiro.map(linhaArray => [...linhaArray]);
            novoTabuleiro[linha][coluna] = estadoAnterior.jogadorAtual;
            
            return {
                tabuleiro: novoTabuleiro,
                jogadorAtual: estadoAnterior.jogadorAtual === "X" ? "O" : "X"
            };
        });
    }

    function verificarVencedor(jogo) {
        const sequencias = obtemSequencias(jogo);
        if (sequencias.includes("XXX")) return "X";
        if (sequencias.includes("OOO")) return "O";
        return undefined;
    }

    function obtemSequencias(jogo) {
        return obtemLinhas(jogo)
            .concat(obtemColunas(jogo))
            .concat(obtemDiagonais(jogo));
    }

    function obtemLinhas(jogo) {
        let linhas = [];
        for (let i = 0; i < jogo.tabuleiro.length; i++) {
            linhas.push(jogo.tabuleiro[i].join(""));
        }
        return linhas;
    }

    function obtemColunas(jogo) {
        let colunas = [];
        for (let i = 0; i < jogo.tabuleiro.length; i++) {
            let coluna = "";
            for (let j = 0; j < jogo.tabuleiro.length; j++) {
                coluna += jogo.tabuleiro[j][i];
            }
            colunas.push(coluna);
        }
        return colunas;
    }

    function obtemDiagonais(jogo) {
        let diagonais = ["", ""]; 
        for (let i = 0; i < jogo.tabuleiro.length; i++) {
            diagonais[0] += jogo.tabuleiro[i][i]; 
            diagonais[1] += jogo.tabuleiro[i][jogo.tabuleiro.length - 1 - i]; 
        }
        return diagonais;
    }

    function obterJogadasPossiveis(jogo) {
        let jogadasPossiveis = [];
        for (let linha = 0; linha < jogo.tabuleiro.length; linha++) {
            for (let coluna = 0; coluna < jogo.tabuleiro[linha].length; coluna++) {
                if (jogo.tabuleiro[linha][coluna] === casaVazia) {
                    jogadasPossiveis.push({ linha: linha, coluna: coluna });
                }
            }
        }
        return jogadasPossiveis;
    }

    function verificarFimDoJogo(jogo) {
        return obterJogadasPossiveis(jogo).length === 0
            || verificarVencedor(jogo) !== undefined;
    }
    
    function reiniciarJogo() {
        setState(jogoVazio);
    }

    return {
        jogo: state,
        verificarFimDoJogo,
        adicionarJogada,
        verificarVencedor,
        reiniciarJogo
    };
}

// Componente do Tabuleiro
function Tabuleiro() {
  const { jogo, adicionarJogada, verificarVencedor, verificarFimDoJogo, reiniciarJogo } = useJogoDoGalo();
  
  const vencedor = verificarVencedor(jogo);
  const fimDoJogo = verificarFimDoJogo(jogo);

  function handleClick(linha, coluna) {
    if (!fimDoJogo) {
      adicionarJogada(jogo, jogo.jogadorAtual, linha, coluna);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Jogo do Galo</h1>
      
      {/* Informação do jogo */}
      <div className="mb-6 text-center">
        {vencedor ? (
          <p className="text-3xl font-bold text-green-600">
            Vencedor: {vencedor}!
          </p>
        ) : fimDoJogo ? (
          <p className="text-2xl font-bold text-orange-600">
            Empate!
          </p>
        ) : (
          <p className="text-xl text-gray-700">
            Jogador atual: <span className="font-bold text-blue-600">{jogo.jogadorAtual}</span>
          </p>
        )}
      </div>

      {/* Tabuleiro */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {jogo.tabuleiro.map((linha, indiceLinha) =>
          linha.map((casa, indiceColuna) => (
            <div
              key={`${indiceLinha}-${indiceColuna}`}
              className="w-20 h-20 bg-white border-2 border-gray-300 flex items-center justify-center text-3xl font-bold cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => handleClick(indiceLinha, indiceColuna)}
            >
              {casa === casaVazia ? "" : casa}
            </div>
          ))
        )}
      </div>

      {/* Botão reiniciar */}
      <button
        onClick={reiniciarJogo}
        className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition-colors"
      >
        Reiniciar Jogo
      </button>
    </div>
  );
}

export default Tabuleiro;