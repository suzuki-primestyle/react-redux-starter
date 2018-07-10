import * as types from './actionTypes';

const initialState = {
  isAuthenticated: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.AUTHENTICATION_SUCCEEDED: {
      return {
        ...state,
        isAuthenticated: true,
      };
    }
    default:
      return state;
  }
}
