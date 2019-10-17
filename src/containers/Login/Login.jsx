import React, { Component } from 'react';
import './login.scss';
import { browserHistory } from 'react-router';
import queryString from 'query-string';
import config from '../../config';
import Input from '../../components/Input/Input'

const axios = require('axios');

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: ""
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

  render() {
    return (
      <div className='login'>
        <div className='login-popup'>
          <div className='login-left'>
          </div>
          <div className='login-right'>
            <div className='login-title'>Login</div>
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <img src='https://content.linkedin.com/content/dam/developer/global/en_US/site/img/signin-button.png' alt='aaa' onClick={this.onLinkedinClick}></img>
            {/* <div>
              <a href='/video'>Upload a video</a>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Login;