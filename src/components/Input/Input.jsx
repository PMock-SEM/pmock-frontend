import React, { Component } from 'react';
import './input.scss'
import { connect } from 'react-redux';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  onInput

  render() {
    return (
      <div className='input'>
        <div className='input-box'>
          <input placeholder={this.props.placeholder} type={this.props.type} onChange={this.props.onInputChange}></input>
        </div>
      </div>
    )
  }
}

export default Input;