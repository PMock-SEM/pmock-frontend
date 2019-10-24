import React, { Component } from 'react';
import './button.scss';

class Button extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className='btn' onClick={this.props.onButtonClick}>{this.props.text}</div>
    );
  }
}

export default Button;