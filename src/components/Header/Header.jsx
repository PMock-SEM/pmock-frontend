import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './header.scss';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

renderContent() {
  switch (this.props.auth) {
    case null:
      return;

    case false:
      return (
      <div className='right-container'>
        <ul className='user-container' role='navigation'>
          <li id='login'>
            <NavLink to='/login' className='nav-link'>Login</NavLink>
          </li>
          <li id='register'>
            <NavLink to='/register' className='nav-link'>Register</NavLink>
          </li>
        </ul>
        
      </div>

      );

    default:
      return (
      <div className='right-container'>

        <NavLink to='/users' className='nav-link'>
          Welcome {this.props.auth.firstName}
        </NavLink>
        <ul className='user-container' role='navigation'>
          <li id='logout'>
            <a href='/users/auth/linkedin/logout' className='redirectlink'>Logout</a>
          </li>
        </ul>
      </div>
      );
  }
}


render() {
    return (
      <div className='header'>
        <div className='left-container'>PMOCK</div>
          {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({auth}) {
  return { auth };
}
export default connect(mapStateToProps) (Header);