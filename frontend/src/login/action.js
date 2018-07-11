import * as types from './actionTypes';
import { loginSucceeded } from '../auth/action';

export function updateLoginForm(name, value) {
  return {
    type: types.LOGIN_FORM_UPDATED,
    name,
    value,
  };
}

export function clearLoginForm() {
  return {
    type: types.CLEAR_LOGIN_FORM,
  };
}

export function submitLoginForm() {
  return (dispatch, getState) => {
    const { email, password } = getState().login;
    console.log(email, password);
    // access to api
    setTimeout(() => {
      dispatch(clearLoginForm());
      dispatch(loginSucceeded());
    }, 1000);
  }
}
