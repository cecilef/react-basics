import React from 'react';
import { PokemonList } from '../poke-list/poke-list';

function fetchFirstGenPokemons() {

	return $.ajax ({
		url: 'https://pokeapi.co/api/v2/pokemon?limit=150',
		dataType: 'json',
		success: function(response) {
			return response.results;
		},
		error: function(xhr, status, err) {
			console.error(status, err.toString());
		}
	});
}

export class ContentPokemonList extends React.Component {
	render() {
		fetchFirstGenPokemons().then((result) => {
			return (
				<PokemonList pokemons={result}/>
			)
		});
	}
}
