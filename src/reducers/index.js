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
  FETCHING_CATEGORY_START,
  FETCHING_CATEGORY_SUCCESS,
  FETCHING_CATEGORY_FAILURE,
  ADD_ITEM_START,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  UPDATE_ITEM_START,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAILURE,
  FETCHING_ITEM_BY_ID_FAILURE,
  FETCHING_ITEM_BY_ID_START,
  FETCHING_ITEM_BY_ID_SUCCESS,
  DELETE_ITEM_START,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  SIGN_OUT_USER
} from '../actions';

const initialState = {
  error: '',
  items: [],
  users: [],
  user: [],
  itemsById: [],
  isFetchingItems: false,
  isFetchingUsers: false,
  isLoggingIn: false,
  isRegistering: false,
  isRegistered: false,
  isLoggedIn: false,
  isAddingItem: false,
  isUpdatingItem: false,
  isUpdatingUser: false,
  isFetchingCategory: false,
  categoryItems: [],
  isFetchingItemsById: false
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
        isRegistered: true,
        users: action.payload
      };
    case REGISTERING_USER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        error: action.payload
      };

    case UPDATE_USER_START:
      return {
        ...state,
        error: '',
        isUpdatingUser: true
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        error: '',
        isUpdatingUser: false,
        users: [...state.users, action.payload]
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        isUpdatingUser: false,
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
        isLoggingIn: false,
        isLoggedIn: true
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

    case FETCHING_CATEGORY_START:
      return {
        ...state,
        isFetchingCategory: !state.isFetchingCategory
      };
    case FETCHING_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case FETCHING_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryItems: action.payload
      };

    case ADD_ITEM_START:
      return {
        ...state,
        error: '',
        isAddingItem: true
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        error: '',
        isAddingItem: false,
        items: [...state.items, ...action.payload]
      };
    case ADD_ITEM_FAILURE:
      return {
        ...state,
        isAddingItem: false,
        error: action.payload
      };

    case UPDATE_ITEM_START:
      return {
        ...state,
        error: '',
        isUpdatingItem: true
      };
    case UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        error: '',
        isUpdatingItem: false,
        items: [...state.items, action.payload]
      };
    case UPDATE_ITEM_FAILURE:
      return {
        ...state,
        isUpdatingItem: false,
        error: action.payload
      };

    case FETCHING_ITEM_BY_ID_START:
      return {
        ...state,
        isFetchingItemsById: !state.isFetchingItemsById
      };
    case FETCHING_ITEM_BY_ID_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case FETCHING_ITEM_BY_ID_SUCCESS:
      return {
        ...state,
        itemsById: action.payload
      };

    case DELETE_ITEM_START:
      return {
        ...state,
        isDeletingItem: true,
        error: '',
        items: []
      };
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        error: '',
        isDeletingItem: false,
        items: action.payload
      };
    case DELETE_ITEM_FAILURE:
      return {
        ...state,
        isDeletingItem: false,
        error: action.payload
      };
    case SIGN_OUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        isRegistering: false
      };
    default:
      return state;
  }
};
