import React from 'react';

export class PokemonListHeader extends React.Component {

	render() {
		return (
			<thead>
				<tr>
					<th><a href="#">Look</a></th>
					<th><a href="#">Name</a></th>
					<th><a href="#">Type</a></th>
				</tr>
			</thead>
		)
	}
}
