import { useState } from "react";

export default function Random() {
  const [random, setRandom] = useState("Clique em gerar");

  function gerarNumero() {
    setRandom(Math.floor(Math.random()*100));
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen text-center gap-6 bg-teal-100">
      <h1 className="text-black font-bold text-4xl">Gerador de Números</h1>
      <p className="text-purple-400 text-6xl font-bold" >{random}</p>
      <button className="border w-20 text-center p-2 rounded bg-purple-600 text-white hover:bg-purple-700 " onClick={gerarNumero}>Gerar</button>
    </div>
  );
}
