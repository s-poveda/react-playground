import React, { Component } from 'react';

class HelloWorld extends Component {
  constructor(props) {
    super(props)
    this.state = {
      who: 'World'
    }
  }
  onClickFriendHandler() {
    this.setState({ who: 'Friend' })
  }
  onClickWorldHandler() {
    this.setState({ who: 'World' })
  }
  onClickReactHandler() {
    this.setState({ who: 'React' })
  }

  render() {
    return (
      <div>
        <p>Hello {this.state.who}!</p>
        <button onClick={() => this.onClickFriendHandler()}>Friend</button>
        <button onClick={() => this.onClickWorldHandler()}>World</button>
        <button onClick={() => this.onClickReactHandler()}>React</button>
      </div>
    )
  }
}

export default HelloWorld;