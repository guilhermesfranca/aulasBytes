class Channel {
  constructor(nome) {
    this.nome = nome;
    this.subscribers = [];
    this.videos = [];
  }
  adicionarVideo(video) {
    return this.videos.push(video);
  }
}

class Subscriber {
  constructor(nome) {
    this.nome = nome
  }
    notificar(canalNome, video) {
    console.log(`${this.nome} foi notificado: novo vídeo "${video}" no canal ${canalNome}`);
  }
}

// ---------- Teste ----------
const canal = new Channel("TechChannel");
const subs = new Subscriber("nomes","asdaf")

const s1 = new Subscriber("Alice");
const s2 = new Subscriber("Bob");

subs.notificar("asadfsa", "asdfadsf")
canal.adicionarVideo("Padrão Observer em JS");
canal.adicionarVideo("Herança vs Composição");