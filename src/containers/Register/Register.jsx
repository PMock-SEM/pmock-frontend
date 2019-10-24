import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/userAction';

class Register extends Component {
  render() {
    return (
      <div></div>
    )
  }
}

const mapDispatchToProps = { register };

export default connect(null, mapDispatchToProps)(Register);