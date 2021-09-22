import SET_USER from '../../actions/auth/set_user';

function setUser(user) {
  return {type: SET_USER, payload: user}
}

export default setUser;