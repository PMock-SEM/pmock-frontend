import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './header.scss';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className='header'>
        <div className='left-container'>PMOCK</div>
        <div className='right-container'>
          <ul className='user-container' role='navigation'>
            <li id='login'>
              <NavLink to='/login' className='nav-link'>Login</NavLink>
            </li>
            <li id='register'>
              <NavLink to='/register' className='nav-link'>Register</NavLink>
            </li>
          </ul>
          <NavLink to='/users' className='nav-link'>
            <div className='avatar'>
            </div>
          </NavLink>
          {/* <div className='user-name'>Login</div> */}
        </div>
      </div>
    );
  }
}

export default Header;