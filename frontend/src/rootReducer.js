import { combineReducers } from 'redux';

import authReducer from './auth/authReducer';
import loginReducer from './login/loginReducer';

export default combineReducers({
  auth: authReducer,
  login: loginReducer,
});

