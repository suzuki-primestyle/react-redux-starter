import * as types from './actionTypes';

export function loginSucceeded() {
  return {
    type: types.AUTHENTICATION_SUCCEEDED,
  };
}

export function logoutSucceeded() {
  return {
    type: types.LOGOUT_SUCCEEDED,
  };
}

export function requestLogout() {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(logoutSucceeded());
    }, 1000);
  }
}
