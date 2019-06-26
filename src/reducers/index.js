import {
  FETCHING_ITEMS_START,
  FETCHING_ITEMS_SUCCESS,
  FETCHING_ITEMS_FAILURE,
  REGISTERING_USER_START,
  REGISTERING_USER_SUCCESS,
  REGISTERING_USER_FAILURE,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  FETCHING_USERS_START,
  FETCHING_USERS_SUCCESS,
  FETCHING_USERS_FAILURE,
  ADDING_ITEMS_START,
  ADDING_ITEMS_SUCCESS,
  ADDING_ITEMS_FAILURE
} from '../actions';

const initialState = {
  error: '',
  items: [],
  users: [],
  isFetchingItems: false,
  isFetchingUsers: false,
  isLoggingIn: false,
  isRegistering: false,
  isUpdatingItem: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_ITEMS_START:
      return {
        ...state,
        error: '',
        isFetchingItems: true
      };
    case FETCHING_ITEMS_SUCCESS:
      return {
        ...state,
        error: '',
        isFetchingItems: false,
        items: action.payload
      };
    case FETCHING_ITEMS_FAILURE:
      return {
        ...state,
        isFetchingItems: false,
        error: action.payload
      };

    case REGISTERING_USER_START:
      return {
        ...state,
        error: '',
        isRegistering: true
      };
    case REGISTERING_USER_SUCCESS:
      return {
        ...state,
        error: '',
        isRegistering: false,
        users: action.payload
      };
    case REGISTERING_USER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        error: action.payload
      };
    case USER_LOGIN_START:
      return {
        ...state,
        error: '',
        isLoggingIn: true
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        error: '',
        isLoggingIn: false
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload
      };
    case FETCHING_USERS_START:
      return {
        ...state,
        error: '',
        isFetchingUsers: true,
        users: []
      };
    case FETCHING_USERS_SUCCESS:
      return {
        ...state,
        error: '',
        isFetchingUsers: false,
        users: [...state.users, ...action.payload]
      };
    case FETCHING_USERS_FAILURE:
      return {
        ...state,
        isFetchingUsers: false,
        error: action.payload
      };
    default:
      return state;
  }
};
