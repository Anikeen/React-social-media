import SET_AUTH from '../../actions/auth/set_auth';

function setIsAuth(auth) {
  return {type: SET_AUTH, payload: auth}
}

export default setIsAuth;