import {
  FETCHING_ITEMS_START,
  FETCHING_ITEMS_SUCCESS,
  FETCHING_ITEMS_FAILURE
} from '../actions';

const initialState = {
  error: '',
  items: [],
  isFetchingItems: false,
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
    default:
      return state;
  }
};
