import React from 'react';
import { PokemonListItem } from './poke-list-item';
import { PokemonListHeader } from './poke-list-header';

export class PokemonList extends React.Component {

	render() {
		var key = 0;
		return (
			<table>
				<PokemonListHeader />
				<tbody>
					{this.props.pokemons.map((pokemon) => {
						key++ ;
						return <PokemonListItem img={'./assets/img/animated/' + key + '.gif'}
																		name={pokemon.name}
																		type="type"
																		key={"key" + key}
						/>
					})}
				</tbody>
			</table>
		)
	}
}
