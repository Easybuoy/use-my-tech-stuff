// dependencies
import React from 'react';
import { connect } from 'react-redux';

// actions
import { login } from '../actions';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  render() {
    return (
      <div className='login-container'>
        <div className='login-form-container'>
          <h1>User Login</h1>
          <form>
            <input
              type='text'
              name='username'
              value=''
              placeholder='username'
            />
            <input
              type='password'
              name='password'
              value=''
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
  { login }
)(Login);
