import * as types from './actionTypes';

const initialState = {
  saidHello: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.SAY_HELLO_DONE: {
      return {
        ...state,
        saidHello: true,
      };
    }
    default:
      return state;
  }
}
