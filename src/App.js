// dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MDBContainer } from 'mdbreact';

// components
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Items from './components/Items';
// styles
import './App.scss';

const Item = props => {
  console.log(`item props`, props);
  return (
    <div className='test-div'>
      <h1>aasdasd</h1>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <PrivateRoute path='/item/:id' component={Item} />
        <PrivateRoute path='/dashboard' component={Dashboard} />;
      </Router>
    );
  }
}

export default App;
