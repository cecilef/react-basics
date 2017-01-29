import React from 'react';
import { PokemonListItem } from './poke-list-item';
import $ from 'jquery';

export class PokemonList extends React.Component {

	render() {
			return (
				<table>
					<tbody>
						{this.props.pokemons[0].results.map((pokemon) => {
							var key = Math.random() * (1 - 150) + 1;
							return <PokemonListItem img="test" name={pokemon.name} type="type" key={"key" + key}/>
						})}
					</tbody>
				</table>
			)
		}
}
