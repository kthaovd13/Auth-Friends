import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import FriendsLogIn from './component/FriendsLogIn';
import PrivateRoute from './component/PrivateRoute';
import FriendsList from './component/FriendsList'

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/friends" component={FriendsList}/>
          <Route path="/login" component={FriendsLogIn} />
          <Route component={FriendsLogIn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
