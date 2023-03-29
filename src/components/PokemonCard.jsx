function PokemonCard(props) {
  let pokemon = props.pokemon;
  let condition = pokemon.imgSrc ? <img src={pokemon.imgSrc} alt="Bulbasaur"/> : <p>???</p>;
   
    return <figure>{condition}</figure>;
    <figcaption>bulbasaur</figcaption>

    }


export default PokemonCard;