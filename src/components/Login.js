// dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// components

// styles
import './Login.scss';

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
    console.log(`login props`, this.props);
    this.props.userLogin(this.state.credentials).then(() => {
      this.props.history.push('/profile');
    });
  };

  render() {
    return !localStorage.getItem('token') ? (
      <div className='login-container'>
        <div className='login-form-container'>
          <button
            type='button'
            className='btn btn-primary'
            data-toggle='modal'
            data-target='#basicExampleModal'
          >
            Move This to the Main Login in Nav
          </button>

          <div
            className='modal fade'
            id='basicExampleModal'
            tabindex='-1'
            role='dialog'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog' role='document'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Log In
                  </h5>
                  <button
                    type='button'
                    className='close'
                    data-dismiss='modal'
                    aria-label='Close'
                  >
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
                <div className='modal-body'>
                  <div className='form-container'>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <Redirect to='/profile' />
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
