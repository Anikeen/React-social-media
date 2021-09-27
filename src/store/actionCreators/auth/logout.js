import setIsAuth from "./set_is_auth";
import setUser from "./set_user";

function logout() {
  return async dispatch => {
    localStorage.removeItem('auth');
    localStorage.removeItem('user');
    dispatch(setIsAuth(false));
    dispatch(setUser({}));
  }
}

export default logout;