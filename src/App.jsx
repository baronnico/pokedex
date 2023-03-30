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
  },
];
export default App
