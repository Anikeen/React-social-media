import REGISTER from '../../actions/auth/register.js';
import REGISTER_SUCCESS from '../../actions/auth/register_success.js';
import REGISTER_ERROR from '../../actions/auth/register_error.js';
import registerUser from '../../../api/user/register.js';

function register(userData, redirect) {
 
  return async (dispatch) => {
    try {
      dispatch({type: REGISTER});

      const newUser = await registerUser(userData);
      
      if (newUser) {
        dispatch({type: REGISTER_SUCCESS, payload: newUser});
        redirect('');
      }

    } catch (error) {
      dispatch({type: REGISTER_ERROR, payload: error});
      alert(error);
    }
  }
}

export default register;