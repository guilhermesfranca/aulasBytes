//Calcula a dor A

let calculadora = {
  historico: [],
  ultimoResultado: 0,

  toJSON() {
    return {
      historico: this.historico,
      ultimoResultado: this.ultimoResultado.toString(),
    };
  },
  toString() {
    if (this.historico.length === 0) {
      return "Calculadora Limpa";
    } else {
      let resultado = "=== Histórico da Calculadora ===\n";

      this.historico.forEach((operacao, indice) => {
        resultado += `${indice + 1}. ${operacao}\n`;
      });
      resultado += `=== Fim do Histórico ===\n`;
      resultado += `Foram realizadas ${this.historico.length} operações\n`;
      resultado += `Último Resultado: ${this.ultimoResultado}`;

      return resultado;
    }
  },
  somar(a, b) {
    if (b === undefined) {
      b = a;
      a = this.ultimoResultado;
    }
    let res = a + b;
    this.historico.push(`${a} + ${b} = ${res}`);
    this.ultimoResultado = res;
    return this;
  },
  subtrair(a, b) {
    if (b === undefined) {
      b = a;
      a = this.ultimoResultado;
    }
    let resSub = a - b;
    this.historico.push(`${a} - ${b} = ${resSub}`);
    this.ultimoResultado = resSub;
    return this;
  },

  multiplicar(a, b) {
    if (b === undefined) {
        b = a;
        a = this.ultimoResultado;
    }
    let resMult = a * b;
    this.historico.push(`${a} * ${b} = ${resMult}`);
    this.ultimoResultado = resMult;
    return this;
  },

  dividir(a, b) {
    if (b === undefined) {
      b = a;
      a = this.ultimoResultado;
    }
    let resDiv = a / b;
    this.historico.push(`${a} / ${b} = ${resDiv}`);
    this.ultimoResultado = resDiv;
    return this;
  },

  limparHistorico() {
    this.historico = [];
    this.ultimoResultado = 0;
    return this;
    // retornar a calculadora
  },

  obterResultado() {
    // aceder ao ultimoResultado
    return BigInt(this.ultimoResultado);
  },
};


calculadora

  .subtrair(1)    // 0 - 1? mas queremos 1 - 1 = 0
  .somar(10)      // 0 + 10 = 10
  .somar(100)     // 10 + 100 = 110
  .somar(200)     // 110 + 200 = 310
  .somar(10000)   // 310 + 10000 = 10310
  .subtrair(309) // 10310 - 309 = 10001
  .dividir(2)
  .dividir(0)

console.log(calculadora.toString());