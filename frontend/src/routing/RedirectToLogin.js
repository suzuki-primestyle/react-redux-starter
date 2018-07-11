import React from 'react';
import { Redirect } from 'react-router-dom';

const RedirectToLogin = ({location}) => {
  return (
    <Redirect
      to={{
        pathname: '/app/auth/login',
        state: { from: location },
      }}
    />
  );
}

export default RedirectToLogin;
