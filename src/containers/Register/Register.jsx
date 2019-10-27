import React, { Component } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { connect } from 'react-redux';
import { register } from '../../actions/userAction';
import './register.scss';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }

    };
  }

  onFirstNameChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        firstName: e.target.value
      }
    });

  }

  onLastNameChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        lastName: e.target.value
      }
    });

  }

  onEmailChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        email: e.target.value
      }
    });

  }

  onPasswordChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        password: e.target.value
      }
    });

  }

  onConfirmPasswordChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        confirmPassword: e.target.value
      }
    });

  }

  onRegisterClick = (e) => {
    e.preventDefault();
    this.props.register(this.state.user);
  }

  validateRegisterInput = () => {

  }

  render() {
    return (
      <div className='register'>
        <div className='register-popup'>
          <div className='register-left'>
          </div>
          <div className='register-right'>
            <div className='register-title'>Register for a new PMock account</div>
            <Input placeholder="First name" onInputChange={this.onFirstNameChange} />
            <Input placeholder="Last name" onInputChange={this.onLastNameChange} />
            <Input placeholder="Email" onInputChange={this.onEmailChange} />
            <Input placeholder='Password' type='password' onInputChange={this.onPasswordChange} />
            <Input placeholder='Confirm your password' type='password' onInputChange={this.onConfirmPasswordChange} />
            <Button className='register-btn' text='Register' onButtonClick={this.onRegisterClick} />
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = { register };

export default connect(null, mapDispatchToProps)(Register);
