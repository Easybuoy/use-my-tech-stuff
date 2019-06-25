import axios from 'axios';

import { axiosWithAuth } from '../util/axiosWithAuth';

// export actions
export const FETCHING_ITEMS_START = 'FETCHING_ITEMS_START';
export const FETCHING_ITEMS_SUCCESS = 'FETCHING_ITEMS_SUCCESS';
export const FETCHING_ITEMS_FAILURE = 'FETCHING_ITEMS_FAILURE';

export const REGISTERING_USER_START = 'REGISTERING_USER_START';
export const REGISTERING_USER_SUCCESS = 'REGISTERING_USER_SUCCESS';
export const REGISTERING_USER_FAILURE = 'REGISTERING_USER_FAILURE';

export const USER_LOGIN_START = 'USER_LOGIN_START';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

// export functions
export const login = creds => dispatch => {};

export const getItems = () => dispatch => {
  dispatch({ type: FETCHING_ITEMS_START });
  return axios
    .get(
      'https://cors-anywhere.herokuapp.com/https://usemytechstuffbe.herokuapp.com/api/items'
    )
    .then(res => {
      dispatch({ type: FETCHING_ITEMS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCHING_ITEMS_FAILURE,
        payload: err.response.data.error
      });
    });
};

export const registerUser = user => dispatch => {
  dispatch({ type: REGISTERING_USER_START });
  console.log(user);
  return axios
    .post(
      'https://cors-anywhere.herokuapp.com/https://usemytechstuffbe.herokuapp.com/api/auth/register',
      user
    )
    .then(res => {
      console.log('from registerUser', res);
      dispatch({ type: REGISTERING_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: REGISTERING_USER_FAILURE,
        payload: err.response.data.message
      });
    });
};

export const userLogin = creds => dispatch => {
  dispatch({ type: USER_LOGIN_START });
  return axiosWithAuth()
    .post(
      'https://cors-anywhere.herokuapp.com/https://usemytechstuffbe.herokuapp.com/api/auth/login',
      creds
    )
    .then(res => {
      console.log('from loginUser', res);
      localStorage.setItem('token', res.data.token);
      dispatch({ type: USER_LOGIN_SUCCESS, payload: res });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: USER_LOGIN_FAILURE,
        payload: err.response.data.message
      });
    });
};
