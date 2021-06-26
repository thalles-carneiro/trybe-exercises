import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import './Pokedex.css';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <main className="pokemon-main">
        {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </main>
    )
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.exact({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  })).isRequired,
};

export default Pokedex;