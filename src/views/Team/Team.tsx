import { DocumentData, collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db, auth } from "../../firebase"

const Team = () => {
  const [pokemonTeam, setPokemonTeam] = useState<Array<DocumentData>>([])

  useEffect(() => {
    getPokemon()
  }, [])

  const getPokemon = async () => {
    if (auth.currentUser) {
        const allPokemon = await getDocs(collection(db, "users", auth.currentUser.uid, "team"))
        allPokemon.forEach((pokemon) => {
            console.log(pokemon.data())
            setPokemonTeam(pokemonTeam => [...pokemonTeam, pokemon.data()])
        })
        console.log(pokemonTeam)
    }
  }

  return (
    <>
        <h1 className="text-center">Current Team</h1>
        {pokemonTeam.length > 0 && 
            pokemonTeam.map((poke, idx) => {
                return (
                    <div key={idx} className="card" style={{width: '18rem'}}>
                        <img src={poke.img} className="card-img-top" alt={poke.name}/>
                        <div className="card-body">
                            <h5 className="card-title">{poke.name}</h5>
                            <ul>
                                <li>{poke.abilities[0]}</li>
                                <li>{poke.abilities[1]}</li>
                            </ul>
                            <button className="btn btn-danger">Remove</button>
                        </div>
                    </div>
                )
            })
        }
    </>
  )
}
export default Team