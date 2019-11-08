import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './header.scss';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth) {
      this.setState({
        user: {
          firstName: nextProps.auth.firstName,
          _id: nextProps.auth._id
        }
      })
    }
  }

  render() {
    return (
      <div className='header'>
        <div className='left-container'>PMOCK</div>
        {this.state.user.firstName ?
          (<div className='right-container'>
            <NavLink to={`/users/${this.state.user._id}`} className='nav-link'>
              Welcome {this.state.user.firstName}
            </NavLink>
            <ul className='user-container' role='navigation'>
              <li id='logout'>
                <a href='/users/auth/linkedin/logout' className='redirectlink'>Logout</a>
              </li>
            </ul>
          </div>) :
          (<div className='right-container'>
            <ul className='user-container' role='navigation'>
              <li id='login'>
                <NavLink to='/login' className='nav-link'>Login</NavLink>
              </li>
              <li id='register'>
                <NavLink to='/register' className='nav-link'>Register</NavLink>
              </li>
            </ul>
          </div>
          )}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);