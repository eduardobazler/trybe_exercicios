import React from "react";
import "./pokemon.css"
import PropTypes from 'prop-types';

class Pokemon extends React.Component{
  render(){
    const {pokemon} = this.props
    const { name, type, averageWeight: {value,measurementUnit }, image} = pokemon

    return <div className="pokemons-card">
      <ol>
        <li>{name}</li>
        <li>{type}</li>
        <li>Average Weight: {value} {measurementUnit}</li>
      </ol>
      <img src={image} alt="imagem do pokemon" />
    </div>
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),

  })
}

export default Pokemon