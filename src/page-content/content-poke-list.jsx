import React from 'react';
import { PokemonList } from '../poke-list/poke-list';

export class ContentPokemonList extends React.Component {

	render() {
		return (
			<PokemonList pokemons={this.props.pokemons}/>
		);
	}
}
