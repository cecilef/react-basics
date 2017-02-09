import React from 'react';
import { UpperNavigation } from './navigation/upper-navigation';

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			activeTab: 0
		};
	}

	setActiveTab(tab) {
		var tabId = tab.id;
		this.setState({
			activeTab: tabId
		});
	}

	render() {
    return (
      <div>
				<UpperNavigation pokemons={this.props.list} activeTab={this.state.activeTab}
												 setActiveTab={this.setActiveTab.bind(this)}/>
      </div>
    )
  }
}
