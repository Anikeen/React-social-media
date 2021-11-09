import setAuthIsLoading from './set_auth_is_loading';
import setIsAuth from './set_is_auth';
import setUser from './set_user';
import setAuthError from './set_auth_error';
import loginUser from '../../../api/auth/login.js';

function login(username, password) {
  return async dispatch => {
    dispatch(setAuthIsLoading(true));

    setTimeout(async () => {
      try {
        const user = await loginUser(username, password);
    
        if (user) {
          dispatch(setIsAuth(true));
          dispatch(setUser(user));

          const serializedUser = JSON.stringify(user);
          localStorage.setItem('user', serializedUser);
          localStorage.setItem('auth', 'true');
        }
      } catch (error) {
        dispatch(setAuthError(error));
        alert(error);
      }

      dispatch(setAuthIsLoading(false));      
    }, 1000);    
  }
}

export default login;