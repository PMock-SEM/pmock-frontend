import React, { Component } from 'react';
import Header from '../../components/Header/Header.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserProfile from '../../containers/UserProfile/UserProfile';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import Video from '../Video/Video.jsx';
import UploadVideo from '../UploadVideo/UploadVideo.jsx';
import Homepage from '../Homepage/Homepage.jsx';
import VideoDetail from '../VideoDetail/VideoDetail';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render () {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <div>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/video' component={Video} />
          <Route exact path='/users' component={UserProfile} />
          <Route exact path='/upload_video' component={UploadVideo} />
          <Route exact path='/video_detail' component={VideoDetail} />
        </div>
      </div>
    </Router>
  );
}
};

export default connect(null, actions)(App);
