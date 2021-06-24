import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { value, measurementUnit } = pokemon.averageWeight;
    return (
      <section className="pokemon-card">
        <div className="pokemon-info">
          <p>{pokemon.name}</p>
          <p>{pokemon.type}</p>
          <p>{`Average weight: ${value.toFixed(1)} ${measurementUnit}`}</p>
        </div>
        <img className="pokemon-image" src={pokemon.image} alt={`${pokemon.name} sprite`} />
      </section>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.exact({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  }).isRequired,
};

export default Pokemon;