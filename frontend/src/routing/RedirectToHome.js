import React from 'react';
import { Redirect } from 'react-router-dom';

const RedirectToHome = ({location}) => {
  return (
    <Redirect
      to={{
        pathname: '/app/',
        state: { from: location },
      }}
    />
  );
}

export default RedirectToHome;
