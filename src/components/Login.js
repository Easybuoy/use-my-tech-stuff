// dependencies
import React from 'react';
import { connect } from 'react-redux';

// actions
import { userLogin } from '../actions';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.userLogin(this.state.credentials).then(res => {
      if (res) {
        this.props.history.push('/dashboard');
      }
    });
  };

  render() {
    return (
      <div className='login-container'>
        <div className='login-form-container'>
          <h1>Login</h1>
          <form onSubmit={this.login}>
            <input
              type='text'
              name='username'
              value={this.state.credentials.username}
              onChange={this.handleChange}
              placeholder='username'
            />
            <input
              type='password'
              name='password'
              value={this.state.credentials.password}
              onChange={this.handleChange}
              placeholder='password'
            />
            <button>Login</button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.loggingIn
});

export default connect(
  mapStateToProps,
  { userLogin }
)(Login);
