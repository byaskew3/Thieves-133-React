import { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";

interface IPokemon {
  name: string;
  abilities: string[];
  img: string;
}

const PokemonFinder = () => {
  const [pokemon, setPokemon] = useState<IPokemon>({
    name: "",
    abilities: [],
    img: "",
  });

  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line
  }, [pokemon.name]);

  const getPokemon = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
    );
    if (response.ok) {
      const data = await response.json();
      setPokemon({
        name: data.name,
        abilities: [
          data.abilities[0].ability.name,
          data.abilities[1].ability.name,
        ],
        img: data.sprites.front_default,
      });
    }
    else {
        setPokemon({...pokemon, img: ''})
    }
  };

  const addPokemon = async () => {
    if (auth.currentUser) {
      await setDoc(doc(db, "users", auth.currentUser.uid, "team", pokemon.name), pokemon)
      alert(`Caught: ${pokemon.name}`)
    }
  }

  return (
    <>
      <h1 className="text-center">Search your Pokemon</h1>
      <div className="w-25 mx-auto">
        <input
          onChange={(event) => {
            setPokemon({ ...pokemon, name: event.target.value });
          }}
          type="text"
        />
      </div>
      {pokemon.img && (
        <div className="card" style={{ width: "18rem" }}>
          <img src={pokemon.img} className="card-img-top" alt={pokemon.name} />
          <div className="card-body">
            <h5 className="card-title">{pokemon.name}</h5>
            {pokemon.abilities.map((ability, idx) => {
                return <li key={idx}>{ability}</li>
            })}
            <button onClick={addPokemon} className="btn btn-primary">
              Catch
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default PokemonFinder;
