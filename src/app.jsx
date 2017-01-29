import React from 'react';
import { PokemonList } from './poke-list/poke-list';
import $ from 'jquery';

export default class App extends React.Component {

	fetchPokemons() {
		// fetch list of pokemon from poke-api
	}

	render() {
    return (
      <div>
        <h1>Test Pokemon</h1>
        <PokemonList pokemons={[
					{img: 'img1', name: 'Bulbizarre', type: 'Plante'},
					{img: 'img2', name: 'Salamèche', type: 'Feu'},
					{img: 'img3', name: 'Carapuce', type: 'Eau'}
				]}/>
      </div>
    )
  }
}
