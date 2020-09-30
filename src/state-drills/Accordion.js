import React, { Component } from 'react';

class Accordion extends Component {
	constructor(props) {
		super(props);
		this.state = { expandedKey: this.props.expandedKey ? this.props.expandedKey : null }
	}
	static defaultProps = {
		sections: []
	}

	onButtonClick = (key) => {
		if (this.state.expandedKey == key) return this.setState({ expandedKey: null });
		this.setState({ expandedKey: key })
	}

	generateLIs() {
		return this.props.sections.map((section, i) => {
			return (
				<li key={i}>
					<button onClick={() => this.onButtonClick(i)}>{section.title}</button>
					{this.state.expandedKey === i && <p>{section.content}</p>}
				</li>
			)
		});
	}

	render() {
		return (
			<div>
				<ul>
					{this.generateLIs()}
				</ul>
			</div>)
	}
}

export default Accordion;
