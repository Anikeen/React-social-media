import SET_NEWS_IS_LOADING from '../../actions/news/set_news_is_loading';

function setNewsIsLoading(payload) {
  return {type: SET_NEWS_IS_LOADING, payload: payload}
}

export default setNewsIsLoading;