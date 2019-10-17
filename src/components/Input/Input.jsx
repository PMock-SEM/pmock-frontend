import React, { Component } from 'react';
import './input.scss'

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className='input'>
        <div className='input-box'>
          <input placeholder={this.props.placeholder}></input>
        </div>
      </div>
    )
  }
}

export default Input;