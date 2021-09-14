import SIGN_IN from '../../actions/user/sign_in.js';
import SIGN_IN_SUCCESS from '../../actions/user/sign_in_success.js';
import SIGN_IN_ERROR from '../../actions/user/sign_in_error.js';
import loginUser from '../../../api/user/login.js';

function signIn(userData, redirect) {
 
  return async (dispatch) => {
    try {
      dispatch({type: SIGN_IN});

      const user = await loginUser(userData);
      
      if (user) {
        dispatch({type: SIGN_IN_SUCCESS, payload: user});
        redirect('');
      }

    } catch (error) {
      dispatch({type: SIGN_IN_ERROR, payload: error});
      alert(error);
    }
  }
}

export default signIn;