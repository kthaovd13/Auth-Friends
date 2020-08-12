import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import FriendsForm from './component/FriendsForm';

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
          <Route path="/login" component={FriendsForm} />
          <Route component={FriendsForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
