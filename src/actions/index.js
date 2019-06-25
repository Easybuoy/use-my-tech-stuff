import axios from 'axios';

// export actions
export const FETCHING_ITEMS_START = 'FETCHING_ITEMS_START';
export const FETCHING_ITEMS_SUCCESS = 'FETCHING_ITEMS_SUCCESS';
export const FETCHING_ITEMS_FAILURE = 'FETCHING_ITEMS_FAILURE';

export const REGISTERING_USER_START = 'REGISTERING_USER_START';
export const REGISTERING_USER_SUCCESS = 'REGISTERING_USER_SUCCESS';
export const REGISTERING_USER_FAILURE = 'REGISTERING_USER_FAILURE';

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
  return axios
    .post(
      'https://cors-anywhere.herokuapp.com/https://usemytechstuffbe.herokuapp.com/api/auth/register',
      user
    )
    .then(res => {
      console.log('from registerUser', res);
      dispatch({ type: REGISTERING_USER_SUCCESS, payload: res });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: REGISTERING_USER_FAILURE,
        payload: err
      });
    });
};
