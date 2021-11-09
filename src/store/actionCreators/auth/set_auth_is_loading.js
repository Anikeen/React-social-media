import SET_AUTH_IS_LOADING from '../../actions/auth/set_auth_is_loading';

function setAuthIsLoading(payload) {
  return {type: SET_AUTH_IS_LOADING, payload: payload}
}

export default setAuthIsLoading;