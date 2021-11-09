import setUserIsLoading from './set_user_is_loading';
import setUserInfo from './set_user_info';
import setUserError from './set_user_error';
import fetchUserInfo from '../../../api/user/fetch_user_info.js';

function getUserInfo(id) {
  return async dispatch => {
    dispatch(setUserIsLoading(true));
    
    setTimeout(async () => {
      try {
        const userInfo = await fetchUserInfo(id);
        dispatch(setUserInfo(userInfo));
        console.log(userInfo)
      } catch (error) {
        dispatch(setUserError(error));
        alert(error);
      }

      dispatch(setUserIsLoading(false));      
    }, 1000);    
  }
}

export default getUserInfo;