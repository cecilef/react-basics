import React from 'react';
import { ContentPokemonList } from './content-poke-list';

export class Content extends React.Component {

	render() {
		switch(this.props.activeTab) {
			/*case 0:
				return (<ContentPokemonList/>);
				break;*/
			case 1:
				return (<ContentPokemonList pokemons={this.props.pokemons}/>);
				break;
			/*case 2:
				return (<ContentPokemonList/>);
				break;*/
			default:
				return(<span><h1>This is content number {this.props.activeTab}</h1></span>)
		}
	}
}
