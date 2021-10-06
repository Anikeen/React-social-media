import setIsLoading from '../common/set_is_loading';
import setIsAuth from './set_is_auth';
import setUser from './set_user';
import setError from '../common/set_error';
import registerUser from '../../../api/auth/register.js';

function register(userData) {
  return async dispatch => {
    dispatch(setIsLoading(true));

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
        dispatch(setError(error));
        alert(error);
      }

      dispatch(setIsLoading(false));      
    }, 1000);
  }
}

export default register;