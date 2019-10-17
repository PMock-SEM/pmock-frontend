import React, { Component } from 'react';
import './popup.scss';

class Popup extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className='popup'>
        <div className='popup-inner'>

        </div>
      </div>
    );
  }
}

export default Popup;