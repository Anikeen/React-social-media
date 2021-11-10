import setIsAuth from "./auth/set_is_auth";
import setUser from "./auth/set_user";
import login from "./auth/login";
import logout from "./auth/logout";
import register from "./auth/register";
import setNews from "./news/set_news";
import getNews from "./news/get_news";
import getUserInfo from "./user/get_user_info";
import setUserInfo from "./user/set_user_info";

const actionCreators = {
  setIsAuth,
  setUser,
  login,
  logout,
  register,
  setNews,
  getNews,
  getUserInfo,
  setUserInfo
};

export default actionCreators;