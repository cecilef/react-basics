import React from 'react';

export class PokemonListItem extends React.Component {

	render() {
		return (
			<tr>
				<td>
					<img src={"img/" + this.props.img} />
				</td>
				<td>
					<span>{this.props.name}</span>
				</td>
				<td>
					<span>{this.props.type}</span>
				</td>
			</tr>
		)
	}
}
