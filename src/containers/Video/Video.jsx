import React, { Component } from 'react';
import { connect } from 'react-redux';

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  handleSubmit(event) {
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Video);