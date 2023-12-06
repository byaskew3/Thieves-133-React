import { useState } from "react";


interface User {
    name: string,
    company: string,
    age: number,
    favColor: string,
    favFood: string
}

const Games = () => {
    const [gamesList, setGamesList] = useState(['World of Warcraft', 'League of Legends', 'The Simpsons', 'Valheim'])

    const handleClick = () => {
        setGamesList(gamesList.map((game) => {
           return game === 'World of Warcraft' ? 'WoW' : game
        }))
    }
  return (
    <>
      <h1>Managing State Cont.</h1>
      {gamesList.map((game, idx) => {
        return <li key={idx}>{game}</li>
      })}
      <button onClick={handleClick}>Update Game</button>
    </>
  );
};
export default Games;
