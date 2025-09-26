import ComponenteComCondicional from "@/components/ComponenteComCondicional";
import ComponenteComEventos from "@/components/ComponenteComEventos";
import ComponenteComMap from "@/components/ComponenteComMap";
import ComponenteComState from "@/components/ComponenteComState";
import ComponenteComUmaProp from "@/components/ComponenteComUmaProp";
import ComponenteComUseEffect from "@/components/ComponenteComUseEffects";
import ComponenteComVariasProps from "@/components/ComponenteComVariasProps";
import PrimeiroComponent from "@/components/PrimeiroComponent";

export default function Home() {
  return (
    <div
      className="w-full min-h-screen bg-[#f04e0d] flex flex-col items-center
      justify-center "
    >
      <h1 className="text-4xl font-sans font-bold">Resumão de React e Next</h1>

      <PrimeiroComponent />
      <ComponenteComUmaProp nome={"Guilherme"} />
      <ComponenteComVariasProps
        titulo="Componente com Várias Props"
        back="blue"
        idade="26"
        nome="Guilherme França"
      />
      <ComponenteComCondicional />
      <ComponenteComMap/>
      <ComponenteComEventos/>
      <ComponenteComState/>
      <ComponenteComUseEffect/>
      
    </div>
  );
}
