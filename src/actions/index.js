import axios from "axios";
import { toast } from "react-toastify";
import { axiosWithAuth } from "../util/axiosWithAuth";

// export actions
export const FETCHING_ITEMS_START = "FETCHING_ITEMS_START";
export const FETCHING_ITEMS_SUCCESS = "FETCHING_ITEMS_SUCCESS";
export const FETCHING_ITEMS_FAILURE = "FETCHING_ITEMS_FAILURE";

export const REGISTERING_USER_START = "REGISTERING_USER_START";
export const REGISTERING_USER_SUCCESS = "REGISTERING_USER_SUCCESS";
export const REGISTERING_USER_FAILURE = "REGISTERING_USER_FAILURE";

export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

export const FETCHING_USERS_START = "FETCHING_USERS_START";
export const FETCHING_USERS_SUCCESS = "FETCHING_USERS_SUCCESS";
export const FETCHING_USERS_FAILURE = "FETCHING_USERS_FAILURE";

export const FETCHING_CATEGORY_START = "FETCHING_CATEGORY_START";
export const FETCHING_CATEGORY_SUCCESS = "FETCHING_CATEGORY_SUCCESS";
export const FETCHING_CATEGORY_FAILURE = "FETCHING_CATEGORY_FAILURE";

export const ADD_ITEM_START = "ADD_ITEMS_START";
export const ADD_ITEM_SUCCESS = "ADD_ITEMS_SUCCESS";
export const ADD_ITEM_FAILURE = "ADD_ITEMS_FAILURE";

export const DELETE_ITEM_START = "DELETE_ITEM_START";
export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS";
export const DELETE_ITEM_FAILURE = "DELETE_ITEM_FAILURE";

export const UPDATE_ITEM_START = "UPDATE_ITEM_START";
export const UPDATE_ITEM_SUCCESS = "UPDATE_ITEM_SUCCESS";
export const UPDATE_ITEM_FAILURE = "UPDATE_ITEM_FAILURE";

export const UPDATE_USER_START = "UPDATE_USER_START";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

export const FETCHING_ITEM_BY_ID_START = "FETCHING_ITEM_BY_ID_START";
export const FETCHING_ITEM_BY_ID_SUCCESS = "FETCHING_ITEM_BY_ID_SUCCESS";
export const FETCHING_ITEM_BY_ID_FAILURE = "FETCHING_ITEM_BY_ID_FAILURE";

export const SIGN_OUT_USER = "SIGN_OUT_USER";

// export const FILTER_ITEMS_START = 'FILTER_ITEMS_START';
// export const FILTER_ITEMS_SUCCESS = 'FILTER_ITEMS_SUCCESS';
// export const FILTER_ITEMS_FAILURE = 'FILTER_ITEMS_FAILURE';

// export functions
export const getItems = () => dispatch => {
  dispatch({ type: FETCHING_ITEMS_START });
  return axios
    .get(
      "https://cors-anywhere.herokuapp.com/https://usemytechstuffbe.herokuapp.com/api/items"
    )
    .then(res => {
      console.log("so uh.", res);
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
      "https://cors-anywhere.herokuapp.com/https://usemytechstuffbe.herokuapp.com/api/auth/register",
      user
    )
    .then(res => {
      dispatch({
        type: REGISTERING_USER_FAILURE,
        payload: ""
      });
      dispatch({ type: REGISTERING_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: REGISTERING_USER_FAILURE,
        payload: err.response
      });
      dispatch({
        type: REGISTERING_USER_FAILURE,
        payload: ""
      });
    });
};

export const userLogin = creds => dispatch => {
  dispatch({ type: USER_LOGIN_START });
  return axiosWithAuth()
    .post(
      "https://cors-anywhere.herokuapp.com/https://usemytechstuffbe.herokuapp.com/api/auth/login",
      creds
    )
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: USER_LOGIN_FAILURE,
        payload: ""
      });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({
        type: USER_LOGIN_FAILURE,
        payload: err.response.data.message
      });
      dispatch({
        type: USER_LOGIN_FAILURE,
        payload: ""
      });
    });
};

export const getUsers = () => dispatch => {
  dispatch({ type: FETCHING_USERS_START });
  return axiosWithAuth()
    .get(
      "https://cors-anywhere.herokuapp.com/https://usemytechstuffbe.herokuapp.com/api/users"
    )
    .then(res => {
      console.log(`getUsers`, res);
      dispatch({ type: FETCHING_USERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCHING_USERS_FAILURE,
        payload: err.response.data.error
      });
    });
};

export const getItemsByCategories = categoryName => dispatch => {
  dispatch({ type: FETCHING_CATEGORY_START });
  axios
    .get(
      `https://usemytechstuffbe.herokuapp.com/api/items/category/${categoryName}`
    )
    .then(res => {
      dispatch({
        type: FETCHING_CATEGORY_FAILURE,
        payload: ""
      });
      dispatch({ type: FETCHING_CATEGORY_SUCCESS, payload: res.data });
    })
    .catch(() =>
      dispatch({
        type: FETCHING_CATEGORY_FAILURE,
        payload: "Unable to get category items"
      })
    )
    .finally(() => dispatch({ type: FETCHING_CATEGORY_START }));
};

export const addItem = item => dispatch => {
  dispatch({ type: ADD_ITEM_START });
  return axiosWithAuth()
    .post(
      "https://cors-anywhere.herokuapp.com/https://usemytechstuffbe.herokuapp.com/api/items",
      item
    )
    .then(res => {
      console.log(`addItem asddddddddddddd`, res);
      dispatch({ type: ADD_ITEM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(`addItem`, err);
      dispatch({
        type: ADD_ITEM_FAILURE,
        payload: err.response.data.error
      });
    });
};

export const deleteItem = item => dispatch => {
  console.log("whats my item id:", item);
  dispatch({ type: DELETE_ITEM_START });
  return axiosWithAuth()
    .delete(`items/${item}`)
    .then(res => {
      console.log(`deleteItem ----------------`, res);
      dispatch({ type: DELETE_ITEM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(`deleteItem`, err);
      dispatch({
        type: DELETE_ITEM_FAILURE,
        payload: err.response
      });
    });
};

export const updateItem = item => dispatch => {
  console.log(`item from updateItem`, item);
  dispatch({ type: UPDATE_ITEM_START });
  return axiosWithAuth()
    .put(
      `https://cors-anywhere.herokuapp.com/https://usemytechstuffbe.herokuapp.com/api/items/${
        item.id
      }`,
      item
    )
    .then(res => {
      console.log(`updateItem res`, res);
      dispatch({ type: UPDATE_ITEM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(`updateItem err`, err);
      dispatch({
        type: UPDATE_ITEM_FAILURE,
        payload: err.response.data.error
      });
    });
};

export const updateUser = user => dispatch => {
  console.log(`id from updateuser`, user);
  console.log(`user id from updateuser`, user.id);
  dispatch({ type: UPDATE_USER_START });
  return axiosWithAuth()
    .put(
      `https://cors-anywhere.herokuapp.com/https://usemytechstuffbe.herokuapp.com/api/users/${
        user.id
      }`
    )
    .then(res => {
      console.log(`updateuser res`, res);
      dispatch({ type: UPDATE_USER_SUCCESS, payload: res });
    })
    .catch(err => {
      console.log(`updateuser err`, err);
      dispatch({
        type: UPDATE_USER_FAILURE,
        payload: err
      });
    });
};

// export const filterItems = id => dispatch => {
//   dispatch({ type: FILTER_ITEMS_START });
// };

export const getItemById = id => dispatch => {
  dispatch({ type: FETCHING_ITEM_BY_ID_START });
  axios
    .get(`https://usemytechstuffbe.herokuapp.com/api/items/${id}`)
    .then(res => {
      dispatch({
        type: FETCHING_ITEM_BY_ID_FAILURE,
        payload: ""
      });
      dispatch({ type: FETCHING_ITEM_BY_ID_SUCCESS, payload: res.data });
    })
    .catch(() =>
      dispatch({
        type: FETCHING_ITEM_BY_ID_FAILURE,
        payload: "Unable to get category items"
      })
    )
    .finally(() => dispatch({ type: FETCHING_ITEM_BY_ID_START }));
};

export const signOut = () => {
  localStorage.removeItem("token");
  toast.success("Signed Out Successfully");

  return {
    type: SIGN_OUT_USER
  };
};
