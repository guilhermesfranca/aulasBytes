// Em react o if else é feito a partir do ternário ou com && para mostrar algo apenas se for verdadeiro
// OPERADOR TERNÁRIO: condição ? seVerdadeiro : seFalso

export default function ComponenteComCondicional() {
  let estaLogado = true;
  let nomeUtilizador = "Sara Santos";
  let acessoCompleto = true;

  return (
    <div className="w-1/2 bg-purple-100 border  border-purple-400 text-purple-700 px-4 py-3 rounded-3xl mb-4">
      <h2 className="text-xl font-semibold">Estado do Login</h2>

      {/* estaLogado é TRUE? Se sim: "Bem-vinda, {nomeUtilizador}!" Se não: "Não estás logado!" */}
      {estaLogado ? (
        <p>Bem-vinda, {nomeUtilizador}!</p>
      ) : (
        <p>Não estás logado!</p>
      )}

      {/* Também podes usar && para mostrar algo apenas se for verdadeiro */}
      {acessoCompleto && 
      <p>Parabéns, Você é Premium e tens acesso completo!</p>}
    </div>
  );
}

// COMO USAR no index.js:
// <ComponenteComCondicional />
