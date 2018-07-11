import { combineReducers } from 'redux';

import initializationReducer from './initialization/initializationReducer';
import authReducer from './auth/authReducer';
import loginReducer from './login/loginReducer';

export default combineReducers({
  initialization: initializationReducer,
  auth: authReducer,
  login: loginReducer,
});

