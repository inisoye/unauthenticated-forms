import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useQueryClient } from 'react-query';

// Context
import { AuthContext } from '../context/authContext';

const useLogOut = (message = '') => {
  const queryClient = useQueryClient();
  const { setToken, setLoginErrorMessage } = React.useContext(AuthContext);
  const history = useHistory();

  const logOut = () => {
    window.localStorage.removeItem('loggedCEMCSUserToken');
    window.localStorage.removeItem('loggedCEMCSUserName');
    setToken(null);
    setLoginErrorMessage(message);
    history.push('/log-in');
    queryClient.clear();
  };

  return logOut;
};

export default useLogOut;
