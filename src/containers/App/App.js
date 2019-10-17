import React from 'react';
import Header from '../../components/Header/Header.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserProfile from '../../containers/UserProfile/UserProfile';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import Video from '../../components/Video/Video.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <div>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/video" component={Video} />
          <Route exact path="/users" component={UserProfile}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
