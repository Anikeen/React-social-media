import setIsLoading from '../common/set_is_loading';
import setUserInfo from './set_user_info';
import setError from '../common/set_error';
import fetchUserInfo from '../../../api/user/fetch_user_info.js';

function getNews() {
  return async dispatch => {
    dispatch(setIsLoading(true));

    setTimeout(async () => {
      try {
        const userInfo = await fetchUserInfo();
        dispatch(setUserInfo(userInfo));

      } catch (error) {
        dispatch(setError(error));
        alert(error);
      }

      dispatch(setIsLoading(false));      
    }, 1000);    
  }
}

export default getNews;