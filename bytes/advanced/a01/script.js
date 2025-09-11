// ex 01
/*
function garanteComprimentoString(str,num) {
        if (str.length === num -1 ) {
            return str;
                        
        } else if (str.length > num - 1 ) {
            return str.slice(0,num)
        }
        else {
            
            return str.padEnd(num , 'asdkllk');

        }
}

console.log(garanteComprimentoString('abc', 2))

//ex 02 

function calculaClassificacaoEtaria(a) {
    
    if ( a ===1) {
        return "Lactante"
    } else if (a > 1 && a <= 4) {
        return "Pré-Escolar"
    } else if (a > 4 && a <= 10) {
        return "escolar"
    } else if (a > 10 && a <= 17 ) {
        return "Adolescente"
    } else if (a < 0) {
        return "Tá achando que é benjamin button?, coloca um número positivo aí meu chapa"
    }

    else {
        return "Já tá na idade ruim amigão: Adulto"
    }
}

console.log(calculaClassificacaoEtaria(-505));




function mesesDoAno(mes) {  
    switch (mes) {
        case 1:
            return "janeiro"
        case 2:
            return "Fevereiro"
        case 3:
            return "Março"
        case 4: 
            return "Abril"
        case 5:
            return "Maio"
        case 6:
            return "Junho"
        case 7: 
            return "Julho"
        case 8: 
            return "Agosto"
        case 9:
            return "Setembro"
        case 10:
            return "Outubro"
        case 11:
            return "Novembro"
        case 12:
            return "Dezembro"
        default:
            return "Fora do escopo anual, verifica a porra da data e vê de novo"
        
    }    
}
console.log(mesesDoAno(0));


function mesesDoAno(mes) {  
    switch (mes) {
        case "jan":
            return "janeiro"
        case "fev":
            return "Fevereiro"
        case "mar":
            return "Março"
        case "abr": 
            return "Abril"
        case "mai":
            return "Maio"
        case "jun":
            return "Junho"
        case "jul": 
            return "Julho"
        case "ago": 
            return "Agosto"
        case "set":
            return "Setembro"
        case "out":
            return "Outubro"
        case "nov":
            return "Novembro"
        case "dez":
            return "Dezembro"
        default:
            return "verifique se está digitando as 3 inicias e se estão entre aspas"
        
    }    
}
console.log(mesesDoAno("jan"));



function escadaCardinais(a,num) {
    let str = ""
    let resultado = ""
    for (let x = 0; x < num ; x++) {
        str = str + a;
        resultado = resultado + str + "\n"
        }
    return resultado 
        
}
console.log(escadaCardinais("*",4))


function escadaCardinaisIn(num) {
    let resultado = ""

  for (let i = 0; i < num; i++) {
        let espacos = " ".repeat(num - i)
        let cardinais = "#".repeat(i)
        resultado += espacos + cardinais + "\n"
  }
  return resultado
}

console.log(escadaCardinaisIn(10))

class Cat {
    constructor(name, weigth, maxJumperHeigth, verticalPosition) {
        this.name = name
        this.weigth = weigth
        this.maxJumperHeigth = maxJumperHeigth
        this.verticalPosition = verticalPosition 
    }
     jump(power) {
            this.verticalPosition = this.maxJumperHeigth*power           
        }
      
}
const cat = new Cat("Buondi", 6.5, 150, 0)
console.log(cat.verticalPosition);
cat.jump(0.2)
console.log(cat.verticalPosition);
cat.jump(0.5)
console.log(cat.verticalPosition);


function aplica(num, fun) {
  return fun(num);
}

console.log(aplica(5, (n) => n * n));
console.log(aplica(5, (n) => n*-1));
console.log(aplica(5, (n) => n % 2 === 0 ? "Par" : "Ímpar"));



function superDigito(str) {
    if (str.length === 1) {
        return parseInt(str)
    }
    let array = str.split('');
    return array
    
}

console.log(superDigito("45221"))



const Cat = {
    FAMILY : "Feline",
    createCat : function (name) {
        return {
            "name" : name
        }
    }
}
console.log(Cat.createCat("Guilherme"));
console.log(Cat.createCat.name)

function minMax(arr, n) {
    arr.sort((a,b) => a -b)
    let min = 0
    let max = 0 

for (let j = arr.length - n; j < arr.length; j++) {
    max += arr[j]
} 
return [min, max]
}
console.log(minMax([1,2,3,4,5], 4))
console.log(minMax([1,2,3,4,5], ))


function calculaEstacaoAno (d,m) {
    if (d >= 1 && d <= 31) {
        let dia = d
    } else {
        return "Por favor introduza um dia entre 1 e 31."
    } 
    if (m >=1 && d <= 12) {
        let mes = m
    } else {
        return "Por favor introduza um mês entre 1 e 12."
    } //? Precisa perguntar como esse exercicio funcionaria pq não está dando.
}

console.log(calculaEstacaoAno(1,7)) *


function somaQuadradosAteN(n){
    let soma = 0

    
    for (let i = 1; i <= n; i++) {
        soma += i*i
        
    }
    return soma
}

console.log(somaQuadradosAteN(2));


function contaParesEntreDoisValores(valor1, valor2){
    let array = []
    if (valor1 !== valor2) {
         for (let i = valor1 -1; i <= valor2; i++ ) {
            if (i % 2 === 0) {
                array.push(i)
            }
         }
     } 
     else {
        return "Por favor introduza dois valores diferentes."
     }
     return array.length
}

console.log(contaParesEntreDoisValores(2,4));




function determinarEstacao(dia, mes) {
    if (mes < 1 || mes > 12) {
        return "Por favor introduza um mês entre 1 e 12"
    }
    if (dia < 1 || dia > 31) {
        return "Por favor introduza um dia válido"
    }
    if (mes === 2 && dia > 28) {
        return "Por favor introduza um dia válido em fevereiro"
    }
    if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia > 30) {
        return "Por favor introduza um dia válido"
    }

    if (mes == 12 || mes == 1 || mes == 2) {
        return "Inverno"
    } else if (mes == 3 || mes == 4 || mes == 5) {
        return "Primavera"
    } else if (mes == 6 || mes == 7 || mes == 8) {
        return "Verão"
    } else if (mes == 9 || mes == 10 || mes == 11) {
        return "Outono"
    }
}

function calculaDiaDoAno(dia, mes) {
  // escreve aqui a função
  if (dia < 1 || dia > 31) {
    return "Por favor introduza um dia entre 1 e 31.";
  }
  if (mes < 1 || mes > 12) {
    return "Por favor introduza um mês entre 1 e 12.";
  }
  if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia > 30) {
    return "Por favor introduza um dia entre 1 e 30.";
  }
  if (mes === 2 && dia > 28) {
    return "Por favor introduza um dia entre 1 e 28.";
  }
  let diasAnteriores = 0;
 
  for (let i = 1; i < mes; i++) {
    if (i === 2) {
      diasAnteriores += 28;
    } else if (i === 4 || i === 6 || i === 9 || i === 11) {
      diasAnteriores += 30;
    } else {
      diasAnteriores += 31;
    }
  }
  return diasAnteriores + dia;
}
console.log(calculaDiaDoAno(2, 1));


function calculaDiasAteAoNatal(dia, mes){
    if(dia < 1 || dia > 31) {
        return "Por favor introduza um dia entre 1 e 31.";
    }
    if (mes < 1 || mes > 12) {
        return "Por favor introduza um mês entre 1 e 12.";
    }
    if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30) {
        return "Por favor introduza um dia entre 1 e 30.";
    }
    if (mes === 2 && dia > 28) {
        return "Por favor introduza um dia entre 1 e 28.";
    }
    if (mes === 12 && dia === 25) {
        return "Hoje é Natal!"
    }
  
    let natal = 359 
    let diasAnteriores = 0
    for (let i = 1; i < mes; i++) {
        if (i === 2) {
            diasAnteriores += 28;
        }
        else if (i === 4 || i === 6 || i === 9 || i === 11) {
            diasAnteriores += 30;
        }
        else {
            diasAnteriores += 31;
        }
        
    }
    let diaAtual = diasAnteriores + dia
    let resultado = natal - diaAtual
    if (resultado < 0 ) {
        let resultadoPos = resultado * -1
        return `Passaram ${resultadoPos} dias do Natal`
    } else {
    return `Faltam ${resultado} dias até o Natal.`
    }}
console.log(calculaDiasAteAoNatal(28,1))

function contaNumeroDeDivisoesPorDois(n){
    
    let contador = 0
    for (; n % 2 === 0; n /= 2) {
        contador++
    }
    return contador
}

console.log(contaNumeroDeDivisoesPorDois(2));



function verificaIdade(pessoa) {
        pessoa.maiorDeIdade = pessoa.idade >= 18
    return pessoa
}
const pessoa1 = {
    nome: "Guilehrme",
    idade: 17
}

console.log(verificaIdade(pessoa1));

class Gato {
    constructor(name, birthday, weight, color) {
        this.name = name;
        this.birthday = birthday;
        this.weight = weight;
        this.color = color;
    }

    get age() {
        return new Date() - this.birthday;
    }

    miar() {
        console.log(`O gato ${this.name} está a miar!`);
    }

    correr() {
        console.log(`O gato ${this.name} está a correr!`);
    }

    saltar() {
        console.log(`O gato ${this.name} está a saltar!`);
    }
}

let buondi = new Gato("Buondi", new Date("2016-01-01"), 6.5, "black");

console.log(buondi);


class Inteiro {
  static numo = 0;

  static eInteiro(n) {
    return Number.isInteger(n);
  }
}

console.log(Inteiro.nulo);
console.log(Inteiro.eInteiro(10));
console.log(Inteiro.eInteiro(3.5));



class ContadorDeInstancias {
  static instancias = 0;
  constructor() {
    ContadorDeInstancias.instancias++;
  }

  static getResultado() {
    return ContadorDeInstancias.instancias;
  }
}

let a = new ContadorDeInstancias ()
let b = new ContadorDeInstancias ()
let c = new ContadorDeInstancias ()

console.log(ContadorDeInstancias.getResultado())


class SoInteiro {
  constructor(inteiro) {
    this._inteiro = inteiro;
  }
  get inteiro() {
    return this._inteiro;
  }

  set inteiro(newInteiro) {
    if (Number.isInteger(newInteiro)) {
      this._inteiro = newInteiro;
    }
  }
}
*/
// sem o construtor
/*
class SoInteiro {
  #inteiro = 0; 

  get inteiro() {
    return this.#inteiro;
  }

  set inteiro(newInteiro) {
    if (Number.isInteger(newInteiro)) {
      this.#inteiro = newInteiro;
    }
  }
}


let n = new SoInteiro();
let a = new SoInteiro();
let c = new SoInteiro();
n.inteiro = 5;
c.inteiro = 3.5;
a.inteiro = 6;

console.log(c.inteiro); // 5


function diaDaSemana(dia){
    const diasSemana = new Map( [
        [1, "Domingo"],
        [2, "Segunda-feira"],
        [3, "Terça-feira"],
        [4, "Quarta-feira"],
        [5, "Quinta-feira"],
        [6, "Sexta-feira"],
        [7, "Sábado"]
    ])

    if (diasSemana.has(dia)) {
        return diasSemana.get(dia) 
    } else {
        return "Número inválido. Por favor insira um número entre 1 e 7."
    }
} 
console.log(diaDaSemana(1))

*/
/*
function somaDiagonalPrincipal(matrizquadrada) {
    // escreve aqui a função
    let resultado = matrizquadrada[0][0] + matrizquadrada[1][1] + matrizquadrada[2][2]
    return resultado
}

console.log(somaDiagonalPrincipal([[1,2,3],[1,2,3],[1,2,3]]));
*/


class Porta {
    constructor() {
        this.trinco = false
    }
    trancar() {
        this.trinco = true
    
    }
    destrancar () {
        this.trinco = false

    }
}

class PortaBlindada extends Porta {
    constructor() {
        super();
        this.trincoSuperior = false;
        this.trincoTraseiro = false;
        this.trincoInferior = false
    }
    trancar() {
        super.trancar();
        this.trincoSuperior = true;
        this.trincoTraseiro = true;
        this.trincoInferior = true
        console.log("Porta blindada trancada com todos os trincos.");

    }
    destrancar() {
        super.destrancar();
        this.trincoSuperior = false;
        this.trincoTraseiro = false;
        this.trincoInferior = false;
        console.log("Porta blindada destrancada com todos os trincos.");

    }

}

/*const porta1 = new Porta();
console.log(porta1.trinco); // false (destrancada)

porta1.trancar();

porta1.destrancar();
console.log(porta1.trinco); // false (destrancada)
*/

const porta2 = new PortaBlindada()


porta2.trancar()




