import * as types from './actionTypes';

const initialState = {
  email: '',
  password: '',
  name: '',
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_FORM_UPDATED: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    default:
      return state;
  }
}
