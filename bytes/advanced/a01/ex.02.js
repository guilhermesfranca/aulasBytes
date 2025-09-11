class Rectangulo {
        constructor(altura, largura) {
            this.altura = altura;
            this.largura = largura;
        }
    calcularArea() {
        return this.altura * this.largura
    }
}

class Quadrado extends Rectangulo {
    constructor(lado) {
        super();
        this.altura = lado;
        this.largura = lado;
    }   

}

const retangulinho = new Rectangulo(2,2)
const quadradinho = new Quadrado(4)

console.log(retangulinho.calcularArea())
console.log(quadradinho.calcularArea());
