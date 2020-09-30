import { render } from '@testing-library/react';
import React, { Component } from 'react';

class RouletteGun extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chamber: null,
      spinning: false
    }
  }

  triggerHandler() {
    this.setState({ chamber: Math.ceil(Math.random() * 8), spinning: true })
    this.timeOut = setTimeout(() => {
      this.setState({ spinning: false })
    }, 2000)

  }

  componentWillUnmount() {
    clearTimeout(this.timeOut);
  }

  renderDisplay() {
    if (this.state.spinning) {
      return 'spinning the chamber and pulling the trigger....'
    } else {
      if (this.props.bulletInChamber === this.state.chamber) {
        return 'BANG!'
      } else {
        return "You're safe!"
      }
    }
  }
  render() {
    return (
      <div>
        <p>{this.renderDisplay()}</p>
        <button onClick={() => this.triggerHandler()}>Pull the Trigger</button>
      </div>
    )
  }
}
export default RouletteGun;