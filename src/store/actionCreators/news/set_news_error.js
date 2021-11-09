import SET_NEWS_ERROR from '../../actions/news/set_news_error';

function setNewsError(error) {
  return {type: SET_NEWS_ERROR, payload: error}
}

export default setNewsError;