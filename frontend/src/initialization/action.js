import * as types from './actionTypes';

export function sayHelloDone() {
  return {
    type: types.SAY_HELLO_DONE,
  };
}

export function sayHello() {
  return (dispatch, getState) => {
    // if
    setTimeout(() => {
      return dispatch(sayHelloDone());
    }, 1000);
  };
}
