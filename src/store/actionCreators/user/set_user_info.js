import SET_USER_INFO from '../../actions/news/set_user_info';

function setUserInfo(user) {
  return {type: SET_USER_INFO, payload: user}
}

export default setUserInfo;