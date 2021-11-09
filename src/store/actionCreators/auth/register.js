import setAuthIsLoading from './set_auth_is_loading';
import setIsAuth from './set_is_auth';
import setUser from './set_user';
import setAuthError from './set_auth_error';
import registerUser from '../../../api/auth/register.js';

function register(userData) {
  return async dispatch => {
    dispatch(setAuthIsLoading(true));

    setTimeout(async () => {
      try {
        const newUser = await registerUser(userData);
    
        if (newUser) {
          dispatch(setIsAuth(true));
          dispatch(setUser(newUser));

          const serializedUser = JSON.stringify(newUser);
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

export default register;