import { useState } from "react";

export default function RandomName() {
  const [random, setRandom] = useState("Clique em gerar");
  const arr = ["Guilherme", "Vitória", "Felipe", "Laura", "Mateus"];
  const adj = [
    "inteligente",
    "esperto",
    "descolado",
    "desenrolado",
    "Gente Boa",
  ];
  function gerarNumero() {
    setRandom(
      arr[Math.floor(Math.random() * arr.length)] +
        " " +
        adj[Math.floor(Math.random() * adj.length)]
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen text-center gap-6 bg-teal-100">
      <h1 className="text-black font-bold text-4xl">Gerador de atributos</h1>
      <p className="text-purple-400 text-6xl font-bold">{random}</p>
      <button
        className="border w-20 text-center p-2 rounded bg-purple-600 text-white hover:bg-purple-700 "
        onClick={gerarNumero}
      >
        Gerar
      </button>
    </div>
  );
}
