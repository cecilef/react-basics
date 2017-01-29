import React from 'react';
import { PokemonListItem } from './poke-list-item';

export class PokemonList extends React.Component {

	render() {
		return (
			<table>
				{this.props.pokemons.map((pokemon) => {
					return <PokemonListItem img={pokemon.img} name={pokemon.name} type={pokemon.type}/>
				})}
			</table>
		)
	}
}
