import * as types from './actionTypes';

export function updateLoginForm(name, value) {
  return {
    type: types.LOGIN_FORM_UPDATED,
    name,
    value,
  };
}

export function loginSucceeded() {
  return {
    type: authTypes.AUTHENTICATION_SUCCEEDED,
  };
}

export function submitLoginForm() {
  return (dispatch, getState) => {
    const { email, name, password } = getState().login;
    console.log(email, name, password);
    // access to api
    setTimeout(() => {
      dispatch(LoginSucceeded());
    }, 2000);
  }
}
