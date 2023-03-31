import { useState } from "react";
import './App.css'
import PokemonCard from './components/PokemonCard.jsx';
import NavBar from "./components/NavBar";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  
  const nextPokemon = () => {
    setPokemonIndex((pokemonIndex) => pokemonIndex + 1);
  };

  const previousPokemon = () => {
    setPokemonIndex((pokemonIndex) => pokemonIndex - 1);
  };

  return (
    <div>
      <NavBar pokemonList={pokemonList} setPokemonIndex={setPokemonIndex}/>
      <PokemonCard pokemonList={pokemonList} pokemonIndex={pokemonIndex} />
    </div>
  )
}
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
    imgSrc:
    "https://th.bing.com/th/id/OIP.7bz0ZI0lKDkdIIWvSD_2AwHaHh?w=186&h=190&c=7&r=0&o=5&dpr=2.3&pid=1.7",
  },
];
export default App
