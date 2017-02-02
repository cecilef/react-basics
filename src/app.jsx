import React from 'react';
import { UpperNavigation } from './navigation/upper-navigation';

export default class App extends React.Component {

	render() {
    return (
      <div>
				<UpperNavigation pokemons={this.props.list}/>
      </div>
    )
  }
}
