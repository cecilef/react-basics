import React from 'react';
import { PokemonList } from './poke-list/poke-list';
import { UpperNavigation } from './navigation/upper-navigation';

export default class App extends React.Component {

	render() {
    return (
      <div>
				<UpperNavigation />
        <PokemonList pokemons={this.props.list} />
      </div>
    )
  }
}
