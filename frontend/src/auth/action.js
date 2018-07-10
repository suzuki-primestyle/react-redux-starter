import * as types from './actionTypes';

export function hello() {
  return (dispatch, getState) => {
    const auth = getState().auth;
    if (auth.isAuthenticated) {
      console.log('probably I am authenticated');
    } else {
      console.log('probably I am not authenticated');
    }
  }
}
