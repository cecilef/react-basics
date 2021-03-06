import React from 'react';

export class Tabs extends React.Component {

	setActiveTab(tab) {
		this.props.changeCurrentTab(tab);
	}

	render() {
		let tabs = this.props.tab_list.map((tab, key) => {
			return <Tab
				key={key}
				id={tab.id}
				className={tab.id === this.props.currentTab ? 'active' : ''}
				onClickMethod={this.setActiveTab.bind(this, tab)}
				title={tab.title}
			/>
		});

		return (
			<ul className="tabs-container">
				{tabs}
			</ul>
		)
	}
}

export class Tab extends React.Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.props.onClickMethod();
	}

	render() {
		return (
			<li className={this.props.className}><a href="#" onClick={this.onClick}>{this.props.title}</a></li>
		)
	}
}
