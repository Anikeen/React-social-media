import setIsLoading from '../common/set_is_loading';
import setIsAuth from './set_is_auth';
import setUser from './set_user';
import setError from '../common/set_error';
import loginUser from '../../../api/user/login.js';

function login(username, password) {
  return async dispatch => {
    dispatch(setIsLoading(true));

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
        dispatch(setError(error));
        alert(error);
      }

      dispatch(setIsLoading(false));      
    }, 1000);    
  }
}

export default login;