import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex'


class App extends React.Component {
  render() {
    const arrayPokemons = pokemons;
    return (
      <div className="App">
        <header className="App-header">
          <Pokedex pokemons = {arrayPokemons}/>
        </header>
      </div>
    );
  }
}

export default App;
