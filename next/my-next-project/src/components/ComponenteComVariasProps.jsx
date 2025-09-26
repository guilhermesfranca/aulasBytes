// Podes receber VÁRIAS props ao mesmo tempo
// Cada prop é como uma "variável" diferente
// Aqui recebemos 4 props: titulo, cor, nome e idade

export default function ComponenteComVariasProps({ titulo, back, nome, idade }) {
    
  
    return (
    <div className={ `w-1/2 bg-${back}-100 border border-${back}-400 text-${back}-700 px-4 py-3 rounded-3xl mb-4`}>
      <h2 className="text-xl font-semibold">{titulo}</h2>
      <p>Nome: {nome}</p>
      <p>Idade: {idade} anos</p>
      <p>Este componente recebeu o nome, a idade, o titulo e a cor como props!</p>
    </div>
  )
}

// COMO USAR no index.js:
// <ComponenteComVariasProps titulo="Perfil do Utilizador" cor="blue" nome="Maria Neto" idade={25} />