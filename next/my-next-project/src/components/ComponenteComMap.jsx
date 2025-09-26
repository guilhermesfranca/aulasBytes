// O MAP é usado para mostrar LISTAS de coisas
// É como um "loop" que cria um elemento para cada item da lista
// Para cada fruta na lista, cria um <p>
// KEY é OBRIGATÓRIO! Ajuda o React a identificar cada item

export default function ComponenteComMap() {

  const frutas = ["Maçã", "Banana", "Laranja", "Morango", "Kiwi"]
  
  return (
    <div className="w-1/2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-3xl mb-4">
      <h2 className="text-center text-xl font-semibold">Lista de Frutas:</h2>

      {frutas.map((fruta, i) => (
        <p key={i}>{i + 1} - {fruta}</p>
      ))}

      <p className="text-sm mt-2">Total: {frutas.length} frutas</p>
    </div>
  )
}

// COMO USAR no index.js:
// <ComponenteComMap />