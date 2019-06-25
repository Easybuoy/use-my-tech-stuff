// dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

// components
import Home from './components/Home';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Items from './components/Items';

// styles
import './App.scss';

class App extends Component {
  state = {
    items: []
  };

  render() {
    return (
      <Router>
        <Navbar />
        <MDBContainer>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route
            path='/items'
            render={props => <Items {...props} items={this.state.items} />}
          />
        </MDBContainer>
      </Router>
    );
  }
}

export default App;
