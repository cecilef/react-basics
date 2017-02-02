import React from 'react';
import { Tabs, Tab } from './navigation-tabs'
import { PokemonList } from '../poke-list/poke-list';

export class UpperNavigation extends React.Component {

	render() {

		return (
			<Tabs className="tabs-wrapper">
				<Tab active="true" title="Home">
					<span className="poke__home-icon"></span>
				</Tab>
				<Tab title="Pokemon List">
					<PokemonList pokemons={this.props.pokemons}/>
				</Tab>
				<Tab title="Pokemon Search"></Tab>
			</Tabs>
		);
	}
}
