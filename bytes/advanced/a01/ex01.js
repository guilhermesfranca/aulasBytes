class Documento {
    constructor(nome) {
        this.nome = nome
    }
    imprimir() {
        return this.nome
    }
}

class Pasta extends Documento {
    constructor(nome) {
        super(nome);
        this.documentos = []
    }

    adicionar(documento) {
        this.documentos.push(documento)
    }
    imprimir() {
        const conteudo = this.documentos.map(doc => doc.imprimir() ).join(", ");
        return `${this.nome}: [${conteudo}]`
    }
}

const doc1 = new Documento("Doc1")
const doc2 = new Documento("Doc2")

const pasta1 = new Pasta("Pasta1")
pasta1.adicionar(doc1)
pasta1.adicionar(doc2)

const pasta2 = new Pasta("Pasta2")
pasta2.adicionar(new Documento("Doc3"))
pasta2.adicionar(pasta1)

console.log(doc1.imprimir())   // Doc1
console.log(pasta1.imprimir()) // \Pasta1: [Doc1, Doc2]
console.log(pasta2.imprimir()) // \Pasta2: [Doc3, \Pasta1: [Doc1, Doc2]]
