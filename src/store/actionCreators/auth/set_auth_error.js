import SET_AUTH_ERROR from '../../actions/auth/set_auth_error';

function setAuthError(error) {
  return {type: SET_AUTH_ERROR, payload: error}
}

export default setAuthError;