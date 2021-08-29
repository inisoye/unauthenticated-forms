import React, { useState } from 'react';

const AuthContext = React.createContext();

function AuthProvider(props) {
  function getSavedToken() {
    const tokenString = window.localStorage.getItem('loggedCEMCSUserToken');
    const userToken =
      tokenString === 'undefined' ? undefined : JSON.parse(tokenString);
    return userToken;
  }

  const [token, setToken] = useState(getSavedToken);
  const [loginErrorMessage, setLoginErrorMessage] = useState('');

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        loginErrorMessage,
        setLoginErrorMessage,
      }}
      {...props}
    />
  );
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer, AuthContext };
