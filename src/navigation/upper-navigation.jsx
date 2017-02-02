import React from 'react';
import { Tabs, Tab } from './navigation-tabs'
import { PokemonList } from '../poke-list/poke-list';

export class UpperNavigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTab: 0
		}
	}

	setCurrentTab(tab) {
		this.setState({
			currentTab: tab.id
		});
	}

 render() {
 	return (
 		<Tabs tab_list={[
			{title: 'Home', id: 0},
			{title: 'Pokemon List', id: 1},
			{title: 'Pokemon search', id: 2}
		]} currentTab={this.state.currentTab} onChange={this.setCurrentTab.bind(this)}/>
	)
 }
}
