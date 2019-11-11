import React, { Component } from 'react';
import './login.scss';
import queryString from 'query-string';
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

componentDidMount () {
    document.getElementById("defaultOpen").click();
}

  onLinkedinUserClick = (e) => {
    window.localStorage.preventHref = window.location.href;
    window.location.href = `/users/auth/linkedin`;
  }

onLinkedinCoachClick = (e) => {
    window.localStorage.preventHref = window.location.href;
    window.location.href = `/coaches/auth/linkedin`;
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

selectUser = (e) => {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with className="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with className="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById("User").style.display = "block";
  e.currentTarget.className += " active";
}

selectCoach = (e) => {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with className="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with className="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById("Coach").style.display = "block";
  e.currentTarget.className += " active";
}

  render() {
    return (

      <div className='login'>
        <div className='login-popup'>
          <div className='login-left'>
            <div className="tab">
              <button className="tablinks" onClick={this.selectUser} id="defaultOpen">
                <div className="login-type">
                  User
                </div>
              </button>
              <button className="tablinks" onClick={this.selectCoach}>
                <div className="login-type">
                  Coach
                </div>
              </button>
            </div>
          </div>
          <div className='login-right'>

            <div id="User" className="tabcontent">
              <div className='login-title'>Login to your PMock User account</div>
              <Input placeholder="Email" onInputChange={this.onEmailChange} />
              <Input placeholder='Password' type='password' onInputChange={this.onPasswordChange} />
              <p className='forget-password'>Forgot your password?</p>

              <div style={{ display: 'inline' }}>

                <Button className='login-btn' text='Login' onButtonClick={this.onLoginClick} />
                <img className='linkedin-login-btn' src='https://content.linkedin.com/content/dam/developer/global/en_US/site/img/signin-button.png' alt='aaa' onClick={this.onLinkedinUserClick}></img>
              </div>
            </div>

            <div id="Coach" className="tabcontent">
              <div className='login-title'>Login to your PMock Coach account</div>
              <Input placeholder="Email" onInputChange={this.onEmailChange} />
              <Input placeholder='Password' type='password' onInputChange={this.onPasswordChange} />
              <p className='forget-password'>Forgot your password?</p>

              <div style={{ display: 'inline' }}>

                <Button className='login-btn' text='Login' onButtonClick={this.onLoginClick} />
                <img className='linkedin-login-btn' src='https://content.linkedin.com/content/dam/developer/global/en_US/site/img/signin-button.png' alt='aaa' onClick={this.onLinkedinCoachClick}></img>
              </div>
            </div>

          </div>
        </div>
      </div>

    )
  }
}


const mapStateToProps = (state) => {
  const { auth } = state;
  return { auth };
};

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);