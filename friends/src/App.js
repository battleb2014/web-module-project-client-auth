import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

import Login from './components/Login';
import Logout from './components/Logout';
import Friends from './components/Friends';

import './App.css';

function App() {
  const isLoggedIn = localStorage.getItem('token');

  return (
    <Router>
      <div className = 'App'>
        <div className="wrap">
          <nav>
            <Link to = '/login'>Login</Link>
            <Link to = '/logout'>Logout</Link>
            { isLoggedIn ? <Link to = '/friends'>Friends</Link> : <div></div> }
          </nav>
          <Switch>
            <ProtectedRoute path = '/friends' component = { Friends } />
            {/* <ProtectedRoute path = '/friends' component = { Friends } /> */}
            <ProtectedRoute path = '/logout' component = { Logout } />
            <Route path = '/login' component = { Login } />
            <Route path = '/' component = { Login } />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;