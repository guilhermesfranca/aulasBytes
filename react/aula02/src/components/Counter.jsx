import { useState } from "react";

export default function Counter() {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador((cont) => cont + 1);
  }

  function decrementar() {
    setContador((cont) => (cont > 0 ? cont - 1 : 0));
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen text-center">
        <p className="text-4xl font-bold text-purple-600">{contador}</p>
        <div className="flex gap-2">
          <button
            className="mt-4 px-4 py-2 bg-teal-400 text-white rounded-lg"
            onClick={incrementar}
          >
            Incrementar
          </button>
          <button
            className="mt-4 px-4 py-2 bg-teal-400 text-white rounded-lg"
            onClick={decrementar}
          >
            Decrementar
          </button>
        </div>
      </div>
    </>
  );
}
