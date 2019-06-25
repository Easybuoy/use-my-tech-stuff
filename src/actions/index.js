import axios from 'axios';

// export actions
export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

// export functions
export const login = creds => dispatch => {};

export const getItems = () => dispatch => {
  dispatch({ type: FETCHING_START });
  return axios
    .get(
      'https://cors-anywhere.herokuapp.com/https://usemytechstuffbe.herokuapp.com/api/items'
    )
    .then(res => {
      console.log('Response from axios .then', res.data);
      dispatch({ type: FETCHING_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCHING_FAILURE,
        payload: err.response.data.error
      });
    });
};
