// dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// components
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import CategoriesList from './components/Category/CategoriesList';
import PrivateRoute from './components/PrivateRoute';
import Items from './components/Items';
import Item from './components/Item';
import NotFound from './components/NotFound';
import AddItem from './components/AddItem';
import User from './components/User';

// styles
import './App.scss';
import 'react-toastify/dist/ReactToastify.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route
            exact
            path='/category/:category_id'
            component={CategoriesList}
          />
          <Route path='/items' component={Items} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute exact path='/dashboard/add' component={AddItem} />
          <PrivateRoute exact path='/item/:id' component={Item} />
          <PrivateRoute exact path='/user/:id' component={User} />
          <Route path='*' component={NotFound} />
        </Switch>

        <ToastContainer
          autoClose={3000}
          position='top-right'
          hideProgressBar={true}
        />
      </Router>
    );
  }
}

export default App;
