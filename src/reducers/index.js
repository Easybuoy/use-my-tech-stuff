import { FETCHING_START, FETCHING_SUCCESS, FETCHING_FAILURE } from '../actions';

const initialState = {
  error: null,
  isFetchingItems: null,
  items: [],
  isLoggingIn: false,
  isRegistering: false,
  isUpdatingItem: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_START:
      return {
        ...state,
        error: '',
        isFetchingItems: true
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        isFetchingItems: false,
        items: [state.items, ...action.payload]
      };
    case FETCHING_FAILURE:
      return {
        ...state,
        isFetchingItems: false,
        error: action.payload
      };
    default:
      return state;
  }
};
