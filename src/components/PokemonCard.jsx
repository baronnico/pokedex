function PokemonCard() {
  let pokemon = pokemonList[1];
  let condition = pokemon.imgSrc ? <img src={pokemon.imgSrc} alt="Bulbasaur"/> : <p>???</p>;
   
    return <figure>{condition}</figure>;
    <figcaption>bulbasaur</figcaption>

    }

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
export default PokemonCard;