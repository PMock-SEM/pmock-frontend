import React, { Component } from 'react';
import './login.scss';
import queryString from 'query-string';
import config from '../../config';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { connect } from 'react-redux';
import { login } from '../../actions/userAction';
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: '',
      user: {
        email: '',
        password: ''
      }
    };
  }
  componentWillReceiveProps(nextProps) {
    const code = queryString.parse(nextProps.location.search.code);
    if (code) {
      this.setState({ code: code });
    }
  }

  onLinkedinClick = (e) => {
    window.localStorage.preventHref = window.location.href;
    window.location.href = `${config.oauth_uri}?response_type=code&client_id=${config.client_id}&redirect_uri=${config.redirect_uri}&state=fooobar&scope=r_liteprofile%20r_emailaddress%20w_member_social`;
  }

  onLoginClick = (e) => {
    e.preventDefault();
    this.props.login(this.state.user);
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


  render() {
    return (
      <div className='login'>
        <div className='login-popup'>
          <div className='login-left'>
          </div>
          <div className='login-right'>
            <div className='login-title'>Login to your PMock account</div>
            <Input placeholder="Email" onInputChange={this.onEmailChange} />
            <Input placeholder='Password' type='password' onInputChange={this.onPasswordChange} />
            <p className='forget-password'>Forgot your password?</p>
            <Button className='login-btn' text='Login' onButtonClick={this.onLoginClick} />
            {/* <img src='https://content.linkedin.com/content/dam/developer/global/en_US/site/img/signin-button.png' alt='aaa' onClick={this.onLinkedinClick}></img> */}
            {/* <div>
              <a href='/video'>Upload a video</a>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(Login);