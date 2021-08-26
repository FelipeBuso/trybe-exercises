import React from 'react';
import Pokemom from './Pokemon'

class Pokedex extends React.Component {
  render() {
    const pokemons = this.props.pokemons;
    return (
      pokemons.map((pokemom) => <Pokemom pokemom = {pokemom} /> )
    )
  }
}

export default Pokedex;