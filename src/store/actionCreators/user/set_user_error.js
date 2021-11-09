import SET_USER_ERROR from '../../actions/user/set_user_error';

function setUserError(error) {
  return {type: SET_USER_ERROR, payload: error}
}

export default setUserError;