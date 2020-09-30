import React, {Component} from 'react';

class Bomb extends Component {
	 constructor(props) {
		 super (props);
		 this.state = { count: 0}
	 }

	 componentDidMount () {
		 this.timer = setInterval((timer) => this.setState({ count: this.state.count+1 }), 1000);
	 }

	 componentWillUnmount() {
		 clearInterval(this.timer);
	 }

	 renderLogic = () => {
		 const { count } = this.state;
		 if (count >= 8){
			 clearInterval(this.timer);
			 return 'BOOM!';
		 }
		 if (count % 2 === 0) {
			 return 'tick'
		 }
		 return 'tock';
	 }

	 render() {
		return (
			<div>
			 <p>{this.renderLogic()}</p>
			</div>
		)
	}
}

export default Bomb;
