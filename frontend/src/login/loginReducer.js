import * as types from './actionTypes';

const initialState = {
  email: '',
  password: '',
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_FORM_UPDATED: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case types.CLEAR_LOGIN_FORM: {
      return {
        ...state,
        email: '',
        password: '',
      };
    }
    default:
      return state;
  }
}
