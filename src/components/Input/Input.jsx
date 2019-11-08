import React, { Component } from 'react';
import './input.scss'

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValidated: false
    };
  }

  render() {
    return (
      <div className='input'>
        <div className='input-box'>
          <input placeholder={this.props.placeholder} type={this.props.type} onChange={this.props.onInputChange} validators={this.props.validators}></input>
        </div>
      </div>
    )
  }
}

export default Input;