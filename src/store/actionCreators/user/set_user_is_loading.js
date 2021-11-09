import SET_USER_IS_LOADING from '../../actions/user/set_user_is_loading';

function setUserIsLoading(payload) {
  return {type: SET_USER_IS_LOADING, payload: payload}
}

export default setUserIsLoading;