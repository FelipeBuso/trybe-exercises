import React from 'react';
import './Pokemon.css'

class Pokemom extends React.Component {
  render() {
    const pokemom = this.props.pokemom;
    return (
      <div className="pokemom">
        <div className="pokemom-items">
          <p>{pokemom.name}</p>
          <p>{pokemom.type}</p>
          <p>{pokemom.name}</p>
          <p>averageWeight: {pokemom.averageWeight.value}</p>
        </div>
        <div className='pokemom-img'>
          <img src={pokemom.image} alt='pokemon'></img>
        </div>
      </div>
    )
 
  }
}

export default Pokemom;
