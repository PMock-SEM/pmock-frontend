import React from 'react';
import Header from '../../components/Header/Header.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserProfile from '../../containers/UserProfile/UserProfile';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import Video from '../Video/Video.jsx';
import UploadVideo from '../UploadVideo/UploadVideo.jsx';
import VideoDetail from '../VideoDetail/VideoDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <div>
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

export default App;
