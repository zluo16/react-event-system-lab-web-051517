import React, {Component} from 'react'

class Keypad extends Component {
  entering = () => {
    console.log('Entering password...');
  }

  render () {
    return (
      <input
        type="password"
        onKeyUp={this.entering}
      />
    )
  }
}

export default Keypad
