import React from 'react';
import { Tabs, Tab } from './navigation-tabs'
import { PokemonList } from '../poke-list/poke-list';

export class UpperNavigation extends React.Component {

 render() {
 	return (
 		<Tabs tab_list={[
			{title: 'Home', id: 0},
			{title: 'Pokemon List', id: 1},
			{title: 'Pokemon search', id: 2}
		]}/>
	)
 }
}
