import SET_NEWS from '../../actions/auth/set_news';

function setNews(user) {
  return {type: SET_NEWS, payload: user}
}

export default setNews;