import PropTypes from "prop-types";

function PokemonCard(props) {
  let pokemon = props.pokemonList[props.pokemonIndex];
  let condition = pokemon.imgSrc ? <img src={pokemon.imgSrc} alt="Bulbasaur"/> : <p>???</p>;
   
    return <figure>{condition}</figure>;
    <figcaption>bulbasaur</figcaption>

    }

PokemonCard.propTypes ={
  pokemonList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  })).isRequired,
}

export default PokemonCard;