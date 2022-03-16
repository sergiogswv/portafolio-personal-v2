import { useEffect, useState } from "react";

const Plus = () => {
  const [pokemon, setPokemon] = useState({});
  const [rick, setRick] = useState({});

  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const consultarPokemon = async () => {
      try {
        const url = "https://rickandmortyapi.com/api/character/1,244";
        const urlPokemon = "https://pokeapi.co/api/v2/pokemon/charizard";

        const [resRick, resPokemon] = await Promise.all([
          fetch(url),
          fetch(urlPokemon),
        ]);

        const [resulRick, resulPokemon] = await Promise.all([
          resRick.json(),
          resPokemon.json(),
        ]);

        //console.log(resulPokemon);

        setRick(resulRick);
        setPokemon(resulPokemon);
        setCargando(false);
      } catch (error) {
        console.log(error);
      }
    };

    consultarPokemon();
  }, []);

  return (
    <>
      {!cargando ? (
        <div className="grid mx-auto w-10/12 text-white">
          <h1 className="pt-5 text-xl md:text-2xl lg:text-5xl text-center">
            Gustos Adicionales
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 pt-5 text-center">
            <div className="items-center mx-auto">
              <h1 className="uppercase text-xl md:text-2xl lg:text-4xl ">
                Pokemon {pokemon?.name}
              </h1>
              <img
                alt={`imagen de ${pokemon?.name}`}
                src={pokemon?.sprites.other.home.front_default}
                className="-mt-5 w-full h-[100%] rounded-full"
              />
            </div>
            {rick.map((r) => (
              <div key={r.id} className="items-center mx-auto">
                <h1 className="uppercase text-xl md:text-2xl lg:text-4xl ">
                  {r.name}
                </h1>
                <img
                  src={r.image}
                  alt={`Imagen de ${r.name}`}
                  className="pt-5 w-full h-[75%] rounded-full"
                />
              </div>
            ))}
          </div>
          <div className="pt-5 text-xl md:text-2xl lg:text-3xl">
            <p>
              Esta pagina fue creada con el proposito de demostrar el consumo de
              API's (PokemonAPI, Rick&Morty API) con Fetch doble.
            </p>
            <p>
              Para mas información, revisar codigo de{" "}
              <a
                href="https://github.com/sergiogswv/portafolio-personal-v2"
                target={"_blank"}
                className="border-b-2 border-white"
              >
                Github.
              </a>
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Plus;
