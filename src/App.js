// dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MDBContainer } from 'mdbreact';

// components
import Home from './components/Home';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import CategoriesList from './components/Category/CategoriesList';

// styles
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route exact path="/category/:category_id" component={CategoriesList} />
      </Router>
    );
  }
}

export default App;
