import React, { Component } from 'react';
import './homepage.scss';

class Homepage extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }
  
render() {
    return (
      <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/presentation.jpg") + ")"
          }}
        >
        </div>
    )
  }
}

export default Homepage;

        